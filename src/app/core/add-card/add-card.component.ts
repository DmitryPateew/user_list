import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef,} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FORM_MIN_VALUE, PHONE_PATTERN} from "../../constant/constant";
import {FormErrorStateMatcher} from "../../utils/exceptions";
import {IUser} from "../../models/user.interface";

@Component({
  selector: 'add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.less'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class AddCardComponent {

  public matcher = new FormErrorStateMatcher();
  public user: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser,
    private formBuilder: FormBuilder
  ) {
    const {NAME, EMAIL, PHONE, USER_NAME} = FORM_MIN_VALUE;

    this.user = this.formBuilder.group({
      id: Date.now(),
      name: ['', Validators.required, Validators.minLength(NAME)],
      email: ['', [Validators.required, Validators.email, Validators.minLength(EMAIL)]],
      phone: ['', [Validators.required, Validators.minLength(PHONE)], Validators.pattern(PHONE_PATTERN)],
      username: ['', [Validators.required, Validators.minLength(USER_NAME)]],
    });
  }


  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.dialogRef.close(this.user.value)
  }
}
