import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthenticationService } from '../authentication.service';

@Injectable({
    providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(
        private authService: AuthenticationService,
        private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes(window.location.hostname))
          return next.handle(req);

        var token = this.authService.getToken();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error) => {
                if (error instanceof HttpErrorResponse && error.status === 401) {
                    this.authService.logout();
                    this.router.navigate(['login']);
                }
                return throwError(error);
            })
        );
    }
}
