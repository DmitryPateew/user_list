import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.reducer";
import {USERS_SELECTOR} from "../../constant/constant";

export const selectUsersState = createFeatureSelector<UserState>(USERS_SELECTOR);
export const selectAllUsers = createSelector(selectUsersState, (state: UserState) => state.users);
