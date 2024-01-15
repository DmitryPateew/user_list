import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule,} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {EDIT_ADD_BUTTON_NAME, FORM_MIN_VALUE, PHONE_PATTERN} from "../../constant/constant";
import {FormErrorStateMatcher} from "../../utils/exceptions";
import {IUser} from "../../models/user.interface";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {map, Observable} from "rxjs";
import {UserService} from "../../services/user/user.service";

const {EDIT, ADD} = EDIT_ADD_BUTTON_NAME;

@Component({
  selector: 'add-edit-card',
  templateUrl: 'add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.less'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    NgIf,
    AsyncPipe,
    NgForOf,
  ],
})

export class AddEditCardComponent {

  public matcher: FormErrorStateMatcher = new FormErrorStateMatcher();
  public userService: UserService = inject(UserService);

  public user: FormGroup;

  public readonly buttonName$: Observable<string> = this.userService.isEdit$.pipe(
    map((isEdit: boolean): string => isEdit ? EDIT : ADD));

  constructor(
    @Inject(MAT_DIALOG_DATA) public userDataFromCard: IUser,
    private formBuilder: FormBuilder
  ) {
    const {NAME, EMAIL, PHONE, USER_NAME} = FORM_MIN_VALUE;
    const {id, name, email, phone, username} = userDataFromCard ?? {};

    this.user = this.formBuilder.group({
      id: id || Date.now(),
      name: [name ?? '', [Validators.required, Validators.minLength(NAME)]],
      email: [email ?? '', [Validators.required, Validators.email, Validators.minLength(EMAIL)]],
      phone: [phone ?? '', [Validators.required, Validators.minLength(PHONE), Validators.pattern(PHONE_PATTERN)]],
      username: [username ?? '', [Validators.required, Validators.minLength(USER_NAME)]],
    });
  }
}
