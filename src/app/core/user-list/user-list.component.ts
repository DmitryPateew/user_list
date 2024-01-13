import {Component, inject} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {UserCardComponent} from "../user-card/user-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.less'],
  standalone: true,
  imports: [MatGridListModule, UserCardComponent, NgForOf, AsyncPipe]
})

export class UserListComponent {
  public userService = inject(UserService);

  deleteCard(id: number | undefined): void {
    this.userService.deleteUser(id)
  }
}
