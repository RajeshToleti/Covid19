import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;

  contactForm: FormGroup;
  nameFormControl: FormControl;
  emailFormControl: FormControl;
  commentFormControl: FormControl;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.nameFormControl = new FormControl("", [Validators.required]);
    this.emailFormControl = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);
    this.commentFormControl = new FormControl("", [Validators.required]);
  }
  createForm() {
    this.contactForm = new FormGroup({
      name: this.nameFormControl,
      email: this.emailFormControl,
      comment: this.commentFormControl,
    });
  }

  submitContactInfo(event): void {
    if (
      !this.nameFormControl.value ||
      !this.emailFormControl.value ||
      !this.commentFormControl.value
    ) {
      return;
    }
    console.log(this.nameFormControl.value);
    console.log(this.emailFormControl.value);
    console.log(this.commentFormControl.value);

    let message =
      this.nameFormControl.value + ", Thanks for your valuable feedback!";

    this._snackBar.open(message, " ", {
      duration: 3000,

      horizontalPosition: "center",
      verticalPosition: "top",
    });

    this.contactForm.reset();
    this.contactForm.untouched;
  }
}
