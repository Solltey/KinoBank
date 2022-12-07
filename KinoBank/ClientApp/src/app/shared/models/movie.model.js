"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(id, name, alternativeName, poster, rating, votes, year, genres, slogan, similarMovies, countries, description, ageRating, movieLength, status) {
        this.id = id;
        this.name = name;
        this.alternativeName = alternativeName;
        this.poster = poster;
        this.rating = rating;
        this.votes = votes;
        this.year = year;
        this.genres = genres;
        this.slogan = slogan;
        this.similarMovies = similarMovies;
        this.countries = countries;
        this.description = description;
        this.ageRating = ageRating;
        this.movieLength = movieLength;
        this.status = status;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.model.js.map