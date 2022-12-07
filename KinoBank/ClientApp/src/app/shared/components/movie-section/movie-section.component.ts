import { Component, Input, OnInit } from "@angular/core";
import { MovieRepository } from "../../models/movie-repository.component";
import { Movie } from "../../models/movie.model";

@Component({
  selector: "movie-section",
  templateUrl: "./movie-section.component.html",
  styleUrls: ["./movie-section.component.css"]
})
export class MovieSectionComponent implements OnInit {
  private _query: string = "";
  movies: Movie[] | null = null;
  @Input() movieType: string = "1";
  orderType: number = 1;
  isWrapperOpen = false;

  constructor(private repo: MovieRepository) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this._query = "limit=24&field=typeNumber&search=" + this.movieType;

    switch (this.orderType) {
      case 1: //Popular
        this._query += "&sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1";
        break;
      case 2: //New
        this._query += "&field=rating.kp&search=7-10&field=year&search=2019-2022&sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1";
        break;
      case 3: //Rating
        this._query += "&field=rating.kp&search=8.5-10&sortField[]=votes.kp&sortType[]=-1";
        break;
    }

    this.repo.getMovies(this._query).subscribe(result => this.movies = result);
  }

  changeOrder(orderType: number) {
    this.movies = null;
    this.orderType = orderType;
    this.getMovies();
  }
}
