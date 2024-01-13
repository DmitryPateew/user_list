import {Component, inject, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  FormGroup,
  FormsModule,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  FormGroupDirective, NgForm
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserService} from "../../services/user/user.service";
import {ErrorStateMatcher} from '@angular/material/core';
import {FORM_MIN_VALUE, PHONE_PATTERN} from "../../constant/constant";
import {FormErrorStateMatcher} from "../../utils/exceptions";

export interface DialogData {
  animal: string;
  name: string;
}

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
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

