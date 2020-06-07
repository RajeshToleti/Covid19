import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { environment } from "../../environments/environment";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
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

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {}

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

    //var formData: any = new FormData();
    // formData.append("Name", this.nameFormControl.value);
    // formData.append("Email", this.emailFormControl.value);
    // formData.append("Comment", this.commentFormControl.value);
    // console.log(JSON.stringify(formData));
    const headers = new HttpHeaders().set("content-type", "application/json");
    var body = {
      name: this.nameFormControl.value,
      Email: this.emailFormControl.value,
      Comment: this.commentFormControl.value,
    };
    console.log(JSON.stringify(body));

    // this.http.get("https://localhost:44368/api/Feedbacks").subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );
    this.http
      .post("https://feedbackapi1.azurewebsites.net/api/feedbacks", body, {
        headers,
      })
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

    //console.log(environment.ContactFormAPI);

    let message =
      this.nameFormControl.value + ", Thanks for your valuable feedback!";

    this._snackBar.open(message, " ", {
      duration: 3000,

      horizontalPosition: "center",
      verticalPosition: "top",
    });

    this.contactForm.reset();
  }
}
