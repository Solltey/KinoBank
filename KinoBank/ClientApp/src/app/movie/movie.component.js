"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieComponent = void 0;
var core_1 = require("@angular/core");
var MovieComponent = /** @class */ (function () {
    function MovieComponent(repo, route) {
        this.repo = repo;
        this.route = route;
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.repo.getMovieDetails(this.route.snapshot.paramMap.get("kinopoiskId"));
    };
    Object.defineProperty(MovieComponent.prototype, "movieDetails", {
        get: function () {
            return this.repo.movieDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieComponent.prototype, "movieImages", {
        get: function () {
            return this.repo.movieImages;
        },
        enumerable: false,
        configurable: true
    });
    MovieComponent = __decorate([
        (0, core_1.Component)({
            templateUrl: './movie.component.html',
            styleUrls: ['./movie.component.css']
        })
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map