import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieRepository } from "../shared/models/movie-repository.component";
import { Movie } from "../shared/models/movie.model";


@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  showGallery: boolean = false;
  showImages: boolean = false;
  currentImage: number = 0;
  posterLoaded: boolean = false;
  imagesLoaded: boolean = false;

  constructor(private repo: MovieRepository,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.repo.getMovieDetails(this.route.snapshot.paramMap.get("kinopoiskId") as unknown as number);
  }

  get movieDetails(): Movie | null {
    return this.repo.movieDetails;
  }

  get movieImages(): string[] {
    return this.repo.movieImages;
  }

  get galleryImages(): string[] {
    return this.repo.galleryImages;
  }

  getGallery(imgIndex: number) {
    this.showGallery = true;
    this.currentImage = imgIndex;
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100%";
  }

  closeGallerry(event: any) {
    this.showGallery = false;
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
  }
}
