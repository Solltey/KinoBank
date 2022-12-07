import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { LoaderService } from "../loader/loader.service";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor{
  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);

    return next.handle(req).pipe(finalize(() => this.loaderService.isLoading.next(false)));
  }
}
