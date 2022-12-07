import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseFormComponent } from '../../shared/components/base-form.component';
import { LoginResult } from '../../shared/models/authentication/login-result.interface';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { LoginRequest } from '../../shared/models/authentication/login-request.interface';
import { LoaderService } from '../../shared/services/loader/loader.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

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
    var loginRequest = <LoginRequest>{};
    loginRequest.email = this.form.controls['email'].value;
    loginRequest.password = this.form.controls['password'].value;
    this.authService
      .login(loginRequest)
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
