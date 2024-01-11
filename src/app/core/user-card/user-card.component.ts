import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['./user-card.component.less'],
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule],
})
export class UserCardComponent {
  title = 'user-card';
  @Input() user: IUser | undefined;
  @Output() id = new EventEmitter<number>();

  sendItemId(id: number | undefined) {
    this.id.emit(id);
  }
}
