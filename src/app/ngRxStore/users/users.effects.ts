import {inject, Injectable} from "@angular/core";
import {catchError, map, switchMap, withLatestFrom} from "rxjs";
import {IUser} from "../../models/user.interface";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import UsersActions from "./userAction.types";
import {EXCEPTIONS} from "../../constant/constant";
import {UserService} from "../../services/user/user.service";
import {select, Store} from "@ngrx/store";
import {selectAllUsers} from "./users.selectors";

const {UPDATE_LOCAL_STORAGE_ERROR} = EXCEPTIONS;

@Injectable()
export class UserEffects {
  public userService: UserService = inject(UserService);

  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.getUsersAction),
      switchMap(() =>
        this.userService.initUsers().pipe(
          map((users: IUser[]) =>
            UsersActions.getUsersActionSuccess({users})),
        )
      )
    )
  }, {functional: true})

  updateLocalStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        UsersActions.addNewUserAction,
        UsersActions.updateUserAction,
        UsersActions.deleteUserAction
      ),
      withLatestFrom(this.store.pipe(select(selectAllUsers))),
      switchMap(([, userState]) =>
        this.userService.updateLocalStorage(userState).pipe(
          catchError(error => {
            console.error(UPDATE_LOCAL_STORAGE_ERROR, error);
            return [];
          }),
          map(() => UsersActions.updateLocalStorageAction())
        )
      )
    )
  }, {functional: true})
}
