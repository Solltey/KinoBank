import { Component, EventEmitter, Output } from "@angular/core";
import { MovieRepository } from "../../models/movie-repository.component";

@Component({
    selector: "app-pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.css"]
})
export class PaginationComponent {
    constructor(private repo: MovieRepository) { }

    @Output() changePageEvent = new EventEmitter<number>();

    get currentPage() {
        return this.repo.currentPage;
    }

    get lastPage() {
        return this.repo.totalPages;
    }

    changePage(page: number) {
      if (page > 0 && page < this.repo.totalPages + 1) {
        this.changePageEvent.emit(page);
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }

    get pages() {
        if (this.repo.totalPages > 1) {
            return Array(this.repo.totalPages).fill(0)
                .map((x, i) => {
                    let result = i + 1;
                    if (result >= this.currentPage - 4 &&
                        result < this.currentPage + 4 &&
                        result > 1 &&
                        result < this.repo.totalPages)
                        return result;
                    return undefined;
                }).filter((value) => value != undefined);
        } else {
            return [];
        }
    }
}
