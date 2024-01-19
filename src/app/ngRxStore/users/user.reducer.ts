import {IUser} from "../../models/user.interface";
import {createReducer, on} from "@ngrx/store";
import UsersActionsTypes from "./userAction.types";


export interface UserState {
  users: IUser[];
}

export const initialUserState: UserState = {
  users: []
}


export const userReducer = createReducer(
  initialUserState,
  on(UsersActionsTypes.getUsersActionSuccess,
    (state, {users}) => ({...state, users: [...users]})),
  on(UsersActionsTypes.addNewUserAction,
    (state, {user}) => ({...state, users: [...state.users, user]})),
  on(UsersActionsTypes.updateUserAction,
    (state, {user}) =>
      ({
        ...state, users: [...state.users.map(
          userFromState => userFromState.id === user.id ? user : userFromState)]
      })),
  on(UsersActionsTypes.deleteUserAction,
    (state, {id}) =>
      ({...state, users: [...state.users.filter(user => user.id !== id)]}))
);
