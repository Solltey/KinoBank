import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieRepository } from "../../models/movie-repository.component";
import { LoaderService } from "../../services/loader/loader.service";
import { AuthenticationService } from "../../services/authentication.service";
import { Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnDestroy, OnInit {
  private destroySubject = new Subject();
  isLoggedIn: boolean = false;
  public typeNumber: number = 0;

  constructor(private repo: MovieRepository, private authService: AuthenticationService,
    private router: Router,
    public loaderService: LoaderService,
    public route: ActivatedRoute) {
    this.authService.authStatus
      .pipe(takeUntil(this.destroySubject))
      .subscribe(result => {
        this.isLoggedIn = result as boolean;
      });

    let movieType = this.route.snapshot.url[0].path;

    switch (movieType) {
      case "films":
        this.typeNumber = 1;
        break;
      case "tv-series":
        this.typeNumber = 2;
        break;
      case "cartoons":
        this.typeNumber = 3;
        break;
      case "anime":
        this.typeNumber = 4;
        break;
    }

  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    this.destroySubject.next(true);
    this.destroySubject.complete();
  }

  searchByKeywords(keywords: string) {
    if (keywords != "") {

      let english = /^[A-Za-z0-9- ]*$/;
      let language;

      if (english.test(keywords)) {
        language = "alternativeName";
      } else {
        language = "name";
      }
      this.repo.searchQuery = `limit=20&sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1&field=${language}&search=${keywords}&isStrict=false`;

      this.repo.searchResults = null;
      this.repo.getMovies(this.repo.searchQuery).subscribe(result => this.repo.searchResults = result);

      this.router.navigateByUrl("/search-results");
    }
  }

  get genres() {
    return this.repo.genres;
  }
}
