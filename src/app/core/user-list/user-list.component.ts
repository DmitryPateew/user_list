import {Component} from '@angular/core';
import {UserApiService} from "../../services/user/user-api.service";
import {IUser} from "../../models/user.interface";
import {MatGridListModule} from "@angular/material/grid-list";
import {UserCardComponent} from "../user-card/user-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.less'],
  standalone: true,
  imports: [MatGridListModule, UserCardComponent, NgForOf]
})

export class UserListComponent {
  title = 'user-list';

  users: IUser[] = [];

  constructor(private service: UserApiService) {
  }

  deleteCard(id: number | undefined) {
    console.log(id);
  }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.users = response;
        console.log(this.users)
      });
  }
}
