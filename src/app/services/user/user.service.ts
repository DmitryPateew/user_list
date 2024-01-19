import {IUser} from "../../models/user.interface";
import {UserApiService} from "./user-api.service";
import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {LOCAL_STORAGE_USERS_KEY} from "../../constant/constant";
import {UsersLocalstorageService} from "./users.localstorage.service";

@Injectable({
  providedIn: "root"
})

export class UserService {

  public usersLocalStorageService: UsersLocalstorageService = inject(UsersLocalstorageService);
  public userApiService: UserApiService = inject(UserApiService);

  public updateLocalStorage(users: IUser[]): Observable<IUser[]> {
    this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, users);
    return of()
  }

  public initUsers(): Observable<IUser[]> {
    const usersFromLocalStorage = this.usersLocalStorageService.getItem(LOCAL_STORAGE_USERS_KEY);
    if (usersFromLocalStorage && usersFromLocalStorage.length) {
      return of(usersFromLocalStorage)
    } else {
      return this.userApiService.getUsers().pipe(
        tap((users: IUser[]) => {
          this.usersLocalStorageService.setItem(LOCAL_STORAGE_USERS_KEY, users);
        })
      );
    }
  }
}
