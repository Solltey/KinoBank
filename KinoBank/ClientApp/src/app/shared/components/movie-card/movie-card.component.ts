import { Component, ElementRef, Input, AfterViewInit, Renderer2, ViewChild } from "@angular/core";
import { Movie } from "../../models/movie.model";


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) { }

  posterLoaded: boolean = false;

  @Input() movie!: Movie;

  @ViewChild("ratingBg", { static: false }) ratingBackground!: ElementRef;

  ngAfterViewInit() {
    let bgImage: string;

    if (this.movie.rating?.kp! > 7.5)
      bgImage = "var(--very-good-rating-gradient)";
    else if (this.movie.rating?.kp! >= 7)
      bgImage = "var(--good-rating-gradient)";
    else if (this.movie.rating?.kp! >= 6.5)
      bgImage = "var(--normal-rating-gradient)";
    else
      bgImage = "var(--bad-rating-gradient)";

    this.renderer.setStyle(this.ratingBackground?.nativeElement, 'background-image', bgImage);
  }
}
