import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseFormComponent } from "../../shared/components/base-form.component";
import { LoginResult } from "../../shared/models/authentication/login-result.interface";
import { RegistrationRequest } from "../../shared/models/authentication/registration-request.interface";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { LoaderService } from "../../shared/services/loader/loader.service";

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BaseFormComponent implements OnInit {

  hide = true;
  loginResult?: LoginResult;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    public loaderService: LoaderService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    });
  }

  onSubmit() {
    var registrationRequest = <RegistrationRequest>{};
    registrationRequest.username = this.form.controls['username'].value;
    registrationRequest.email = this.form.controls['email'].value;
    registrationRequest.password = this.form.controls['password'].value;
    this.authService
      .register(registrationRequest)
      .subscribe(result => {
        if (result.success) {
          this.router.navigate(["/"]);
        }
      }, error => {
        if (error.status == 401) {
          this.loginResult = error.error;
        }
      });
  }
}
