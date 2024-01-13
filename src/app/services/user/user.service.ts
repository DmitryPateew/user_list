import {IUser} from "../../models/user.interface";
import {UserApiService} from "./user-api.service";
import {inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {EXCEPTIONS} from "../../constant/constant";

@Injectable({
  providedIn: "root"
})

export class UserService {

  public userApiService = inject(UserApiService);
  public users$: Observable<IUser[]> = this.userApiService.getUsers();

  public addUser(user: IUser): void {
    this.users$ = this.users$.pipe(
      map(users => [...users, user]));
  }

  public deleteUser(id: number | undefined): void {
    const {USER_ID_UNDEFINED} = EXCEPTIONS;

    !id ? console.log(USER_ID_UNDEFINED) :
      this.users$ = this.users$.pipe(
        map(users =>
          users.filter(
            user => user.id !== id)));
  }
}
