import {Component, inject} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddEditCardComponent} from "../../add-edit-card/add-edit-card.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {addNewUserAction, getUsersAction} from "../../../ngRxStore/users/user.actions";
import {Store} from "@ngrx/store";
import {IUser} from "../../../models/user.interface";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule]
})

export class HeaderComponent {
  public addCard: MatDialog = inject(MatDialog);

  constructor(private store: Store) {
    this.store.dispatch(getUsersAction());
  };

  openDialog(): void {
    const dialogRef: MatDialogRef<AddEditCardComponent> = this.addCard.open(AddEditCardComponent);

    dialogRef.afterClosed()
      .subscribe((user: IUser) => {
        if (user) {
          this.store.dispatch(addNewUserAction({user}));
        }
      });
  }
}
