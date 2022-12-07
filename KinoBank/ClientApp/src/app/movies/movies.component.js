"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesComponent = void 0;
var core_1 = require("@angular/core");
var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(repo, route, router) {
        this.repo = repo;
        this.route = route;
        this.router = router;
        this._query = "sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1&field=typeNumber&search=";
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.repo.currentPage = 1;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        var movieType = this.route.snapshot.url[0].path;
        var typeNumber = 1;
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
        var genre = this.repo.genres[typeNumber - 1][this.route.snapshot.paramMap.get("genreId")];
        console.log(genre);
        if (genre != undefined)
            this._query += "&field=genres.name&search=".concat(genre);
        this.repo.getMovies(this._query);
    };
    Object.defineProperty(MoviesComponent.prototype, "movies", {
        get: function () {
            return this.repo.movies;
        },
        enumerable: false,
        configurable: true
    });
    MoviesComponent.prototype.changePage = function (page) {
        this.repo.currentPage = page;
        this.repo.getMovies(this._query);
    };
    MoviesComponent = __decorate([
        (0, core_1.Component)({
            templateUrl: '../shared/templates/movies-display/movies-display.component.html',
            styleUrls: ['../shared/templates/movies-display/movies-display.component.css']
        })
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map