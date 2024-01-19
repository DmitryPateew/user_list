import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddEditCardComponent} from "../add-edit-card/add-edit-card.component";
import {UserService} from "../../services/user/user.service";
import {addNewUserAction, getUsersAction, updateUserAction} from "../../ngRxStore/users/user.actions";
import {Store} from "@ngrx/store";

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
  public addCard: MatDialog = inject(MatDialog);

  constructor(private store: Store) {};

  sendItemId(id: number | undefined) {
    this.id.emit(id);
  }

  openDialog(): void {
    const dialogRef: MatDialogRef<AddEditCardComponent> = this.addCard.open(AddEditCardComponent, {
      data: this.user
    });

    dialogRef.afterClosed()
      .subscribe((user: IUser) => {
        if (user) {
          this.store.dispatch(updateUserAction({user}));
        }
      });
  }
}
