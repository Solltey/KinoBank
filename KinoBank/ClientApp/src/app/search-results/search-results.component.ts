import { Component, OnInit } from "@angular/core";
import { Movie } from "../shared/models/movie.model";
import { MovieRepository } from "../shared/models/movie-repository.component";
import { Router } from "@angular/router";

@Component({
  templateUrl: '../shared/templates/movies-display/movies-display.component.html',
  styleUrls: ['../shared/templates/movies-display/movies-display.component.css']
})
export class SearchResultsComponent implements OnInit {
  get movies(): Movie[] | null {
    return this.repo.searchResults;
  }

  constructor(private repo: MovieRepository,
    private router: Router) { }

  ngOnInit() {
    this.repo.currentPage = 1;
    this.repo.getMovies(this.repo.searchQuery).subscribe(result => this.repo.searchResults = result);
  }

  changePage(page: number) {
    this.repo.searchResults = null;
    this.repo.currentPage = page;
    this.repo.getMovies(this.repo.searchQuery).subscribe(result => this.repo.searchResults = result);
  }
}
