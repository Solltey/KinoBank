import { Component, Input } from "@angular/core";
import { Movie } from "../../models/movie.model";

@Component({
    selector: "movie-carousel",
    templateUrl: "./movie-carousel.component.html",
    styleUrls: ["./movie-carousel.component.css"]
})
export class MovieCarouselComponent {
    @Input() movies: Movie[] | undefined = [];
}
