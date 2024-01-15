import {Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../../services/user/user.service";
import {AddEditCardComponent} from "../../add-edit-card/add-edit-card.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule]
})

export class HeaderComponent {
  public userService: UserService = inject(UserService);
  public addCard: MatDialog = inject(MatDialog);

  openDialog(): void {
    this.userService.isEdit$.next(false);
    const dialogRef: MatDialogRef<AddEditCardComponent> = this.addCard.open(AddEditCardComponent);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.userService.addUser(result)
        }
      });
  }
}
