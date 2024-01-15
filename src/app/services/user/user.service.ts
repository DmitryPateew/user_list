import {IUser} from "../../models/user.interface";
import {UserApiService} from "./user-api.service";
import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {EXCEPTIONS, LOCAL_STORAGE_USERS_KEY} from "../../constant/constant";
import {UsersLocalstorageService} from "./users.localstorage.service";

@Injectable({
  providedIn: "root"
})

export class UserService {

  public userApiService: UserApiService = inject(UserApiService);
  public usersLocalStorageService: UsersLocalstorageService = inject(UsersLocalstorageService);

  private readonly usersSubject$: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  public readonly users$: Observable<IUser[]> = this.usersSubject$.asObservable();
  public readonly isEdit$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.initUsers();
  }

  private initUsers(): void {
    const usersFromLocalStorage = this.usersLocalStorageService.getItem(LOCAL_STORAGE_USERS_KEY);
    if (usersFromLocalStorage) {
      this.usersSubject$.next(usersFromLocalStorage);
    } else {
      this.userApiService.getUsers().subscribe(
        (users: IUser[]) => {
          this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, users);
          return this.usersSubject$.next(users);
        }
      );
    }
  }

  public addUser(user: IUser): void {
    const currentUsers: IUser[] = this.usersSubject$.value;
    const updatedUsers: IUser[] = [...currentUsers, user];
    this.usersSubject$.next(updatedUsers);
    this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, updatedUsers);
  }

  public deleteUser(id: number | undefined): void {
    const {USER_ID_UNDEFINED} = EXCEPTIONS;

    if (id) {
      const updatedUsers: IUser[] = this.usersSubject$.value
        .filter((user: IUser): boolean => user.id !== id);
      this.usersSubject$.next(updatedUsers);
      this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, updatedUsers);
    } else {
      console.log(USER_ID_UNDEFINED);
    }
  }

  public editUser(user: IUser): void {
    console.log(user);
    this.usersSubject$.next(
      this.usersSubject$.value.map(
        (userSubject: IUser): IUser => userSubject.id === user.id ? user : userSubject));
    this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, this.usersSubject$.value);
  }
}
