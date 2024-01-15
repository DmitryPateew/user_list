import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddEditCardComponent} from "../add-edit-card/add-edit-card.component";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['./user-card.component.less'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule],
})
export class UserCardComponent {
  @Input() user: IUser | undefined;
  @Output() id = new EventEmitter<number>();
  public userService = inject(UserService);
  public addCard: MatDialog = inject(MatDialog);

  sendItemId(id: number | undefined) {
    this.id.emit(id);
  }

  openDialog(): void {
    this.userService.isEdit$.next(true);
    const dialogRef: MatDialogRef<AddEditCardComponent> = this.addCard.open(AddEditCardComponent, {
      data: this.user
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.userService.editUser(result);
        }
      });
  }
}
