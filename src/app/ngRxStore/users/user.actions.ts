import {createAction, props} from "@ngrx/store";
import {IUser} from "../../models/user.interface";
export const getUsersAction = createAction('[GET USERS] get users action start');

export const getUsersActionSuccess = createAction('[GET USERS] get users action success',
  props<{users: IUser[]}>());

export const addNewUserAction = createAction('[ADD NEW USER] add user action',
  props<{user: IUser}>());

export const updateUserAction = createAction('[UPDATE USER] update user action',
  props<{user: IUser}>());

export const deleteUserAction = createAction('[DELETE USER] delete user action',
  props<{id: number}>());

export const updateLocalStorageAction = createAction('[UPDATE USERS IN LOCAL STORAGE] update local storage users action')
