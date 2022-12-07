import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieRepository } from '../shared/models/movie-repository.component';
import { Movie } from "../shared/models/movie.model";

@Component({
  templateUrl: '../shared/templates/movies-display/movies-display.component.html',
  styleUrls: ['../shared/templates/movies-display/movies-display.component.css']
})
export class MoviesComponent implements OnInit {
  private _query: string = "limit=20&sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1&field=typeNumber&search=";
  movies: Movie[] | null = null;

  constructor(private repo: MovieRepository,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    this.repo.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    let movieType = this.route.snapshot.url[0].path;
    let typeNumber = 1;

    switch (movieType) {
      case "films":
        typeNumber = 1;
        break;
      case "tv-series":
        typeNumber = 2;
        break;
      case "cartoons":
        typeNumber = 3;
        break;
      case "anime":
        typeNumber = 4;
        break;
    }
    this._query += typeNumber;

    let genre = this.repo.genres[typeNumber - 1][this.route.snapshot.paramMap.get("genreId") as unknown as number];

    console.log(genre);
    if (genre != undefined)
      this._query += `&field=genres.name&search=${genre}`;

    this.repo.getMovies(this._query).subscribe(result => this.movies = result);
  }

  changePage(page: number) {
    this.repo.currentPage = page;
    this.repo.getMovies(this._query).subscribe(result => this.movies = result);
  }
}
