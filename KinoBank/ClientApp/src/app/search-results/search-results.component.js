"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultsComponent = void 0;
var core_1 = require("@angular/core");
var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(SearchResultsComponent.prototype, "movies", {
        get: function () {
            return this.repo.movies;
        },
        enumerable: false,
        configurable: true
    });
    SearchResultsComponent.prototype.changePage = function (page) {
        this.repo.currentPage = page;
        this.repo.getMovies(this.repo.searchQuery);
    };
    SearchResultsComponent = __decorate([
        (0, core_1.Component)({
            templateUrl: '../shared/templates/movies-display/movies-display.component.html',
            styleUrls: ['../shared/templates/movies-display/movies-display.component.css']
        })
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map