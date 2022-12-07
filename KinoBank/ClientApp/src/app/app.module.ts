import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MovieComponent } from './movie/movie.component';
import { PlayerComponent } from './player/player.component';
import { SharingModule } from './shared/sharing.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderInterceptorService } from './shared/services/http-interceptors/loader-interceptor.service';
import { AuthInterceptorService } from './shared/services/http-interceptors/auth-interceptor.service';
import { LoginComponent } from './authentication/login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { MaterialModule } from './material.module';
import { RegistrationComponent } from './authentication/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PlayerComponent,
    SearchResultsComponent,
    PageNotFoundComponent,
    MoviesComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    HomeModule,
    SharingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  exports: [PlayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
