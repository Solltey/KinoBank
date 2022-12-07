import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from 'rxjs';
import { LoginRequest } from '../models/authentication/login-request.interface';
import { LoginResult } from '../models/authentication/login-result.interface';
import { RegistrationRequest } from "../models/authentication/registration-request.interface";
import { RegistrationResult } from "../models/authentication/registration-result.interface";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(protected http: HttpClient) { }

  private tokenKey = "token";


  private _authStatus = new Subject<boolean>();
  public authStatus = this._authStatus.asObservable();

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  init(): void {
    if (this.isAuthenticated())
      this.setAuthStatus(true);
  }

  login(item: LoginRequest): Observable<LoginResult> {
    var url = "https://localhost:44304/api/Account/Login";
    return this.http.post<LoginResult>(url, item)
      .pipe(tap(loginResult => {
        if (loginResult.success && loginResult.token) {
          localStorage.setItem(this.tokenKey, loginResult.token);
          this.setAuthStatus(true);
        }
      }));
  }

  register(item: RegistrationRequest): Observable<RegistrationResult> {
    var url = "https://localhost:44304/api/Account/Register";
    return this.http.post<RegistrationResult>(url, item);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.setAuthStatus(false);
  }

  private setAuthStatus(isAuthenticated: boolean): void {
    this._authStatus.next(isAuthenticated);
  }
}
