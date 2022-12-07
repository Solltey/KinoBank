import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Movie } from "../../models/movie.model";


@Directive({
    selector: "[nextMovie]"
})
export class NextDirective {
    constructor(private elem: ElementRef) { }

    @Input() movies!: Movie[];

    @HostListener("click") getNextMovie() {
        this.movies.push(this.movies.shift()!);
    }
}
