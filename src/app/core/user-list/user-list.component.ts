import {Component, inject} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {UserCardComponent} from "../user-card/user-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {UserService} from "../../services/user/user.service";
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";
import {IUser} from "../../models/user.interface";
import {selectAllUsers} from "../../ngRxStore/users/users.selectors";
import {deleteUserAction, getUsersAction} from "../../ngRxStore/users/user.actions";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.less'],
  standalone: true,
  imports: [MatGridListModule, UserCardComponent, NgForOf, AsyncPipe]
})

export class UserListComponent {
  public readonly users$: Observable<IUser[]> = this.store.select(selectAllUsers);

  constructor(private store: Store) {
    this.store.dispatch(getUsersAction());
  };

  deleteCard(id: number): void {
    this.store.dispatch(deleteUserAction({id}));
  }
}
