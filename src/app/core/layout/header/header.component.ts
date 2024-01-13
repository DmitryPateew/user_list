import {Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../../services/user/user.service";
import {AddCardComponent} from "../../add-card/add-card.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule]
})

export class HeaderComponent {
  public userService = inject(UserService);
  public addCard = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.addCard.open(AddCardComponent);

    dialogRef.afterClosed()
      .subscribe(result => {
        this.userService.addUser(result)
      });
  }
}
