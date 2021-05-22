import { Component, OnInit } from "@angular/core";
import { HttpService } from "../providers/http.service";
import { GeneralService } from "../providers/general.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  AbstractControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Events } from "../events";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  formgroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  check: boolean = false;
  isSubmitted: boolean = false;
  constructor(
    private http: HttpService,
    private general: GeneralService,
    public formbuilder: FormBuilder,
    public events: Events,
    private router: Router
  ) {
    let EMAILPATTERN = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
    this.formgroup = formbuilder.group({
      email: ["", [Validators.required, Validators.pattern(EMAILPATTERN)]],
      password: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
    this.email = this.formgroup.controls["email"];
    this.password = this.formgroup.controls["password"];
    console.log("signin page");
  }

  submitForm() {
    this.isSubmitted = true;
    console.log(this.formgroup.value);
    if (!this.formgroup.valid) {
      console.log("Please provide all the required values!");
      return false;
    } else {
      if (
        this.email.value == "danish-aftab@hotmail.com" &&
        this.password.value == "123456"
      ) {
        this.general.presentToast("Logged in succesfully");
        this.router.navigate(["/tabs/home"]);
      } else {
        this.general.presentToast("Invalid email or password");
      }
    }
  }

  ngOnInit() {}
}
