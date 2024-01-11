import {Component} from '@angular/core';
import {UserApiService} from "../../services/user/user-api.service";
import {IUser} from "../../models/user.interface";
import {MatGridListModule} from "@angular/material/grid-list";
import {UserCardComponent} from "../user-card/user-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.less'],
  standalone: true,
  imports: [MatGridListModule, UserCardComponent, NgForOf, AsyncPipe]
})

export class UserListComponent {
  title = 'user-list';

  users$:Observable<IUser[]> =  this.service.getUsers();

  constructor(private service: UserApiService) {
  }

  deleteCard(id: number | undefined) {
    console.log(id);
  }
}
