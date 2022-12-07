import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { Movie } from "../../models/movie.model";

@Directive({
    selector: "[prevMovie]"
})
export class PrevDirective {
    constructor(private elem: ElementRef) { }

    @Input() movies!: Movie[];

    @HostListener("click") getPreviousMovie() {
        this.movies.unshift(this.movies.pop()!);
    }
}
