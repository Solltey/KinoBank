import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { MovieComponent } from "./movie/movie.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { LoginComponent } from './authentication/login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthGuard } from './shared/services/auth.guard';
import { RegistrationComponent } from './authentication/registration/registration.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'films/:genreId', component: MoviesComponent },
  { path: 'films', component: MoviesComponent },
  { path: 'tv-series/:genreId', component: MoviesComponent },
  { path: 'tv-series', component: MoviesComponent },
  { path: 'cartoons/:genreId', component: MoviesComponent },
  { path: 'cartoons', component: MoviesComponent },
  { path: 'anime/:genreId', component: MoviesComponent },
  { path: 'anime', component: MoviesComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'movies/:kinopoiskId', component: MovieComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
