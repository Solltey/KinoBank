"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
var core_1 = require("@angular/core");
var API_KEY = "6ASC6B0-3RA4YE0-JHNMAJT-RFBSH69";
var API_BASE_URL = "https://api.kinopoisk.dev";
var IMAGES_API_BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
var IMAGES_API_KEY = "d775a434-c439-4e17-a6b7-2c086166d5b8";
var filmGenres = [
    "боевик",
    "фэнтези",
    "фантастика",
    "триллер",
    "военный",
    "детектив",
    "комедия",
    "драма",
    "ужасы",
    "криминал",
    "мелодрама",
    "вестерн",
    "биография",
    "детский",
    "фильм-нуар",
    "для взрослых",
    "документальный",
    "история",
    "короткометражка",
    "музыка",
    "мюзикл",
    "новости",
    "приключения",
    "реальное ТВ",
    "семейный",
    "спорт",
    "ток-шоу",
    "церемония",
];
var tvSeriesGenres = [
    "боевик",
    "фэнтези",
    "фантастика",
    "триллер",
    "военный",
    "детектив",
    "комедия",
    "драма",
    "ужасы",
    "криминал",
    "мелодрама",
    "вестерн",
    "биография",
    "детский",
    "документальный",
    "игра",
    "история",
    "короткометражка",
    "музыка",
    "мюзикл",
    "новости",
    "приключения",
    "реальное ТВ",
    "семейный",
    "спорт",
    "ток-шоу"
];
var cartoonGenres = [
    "боевик",
    "фэнтези",
    "фантастика",
    "триллер",
    "военный",
    "комедия",
    "детектив",
    "драма",
    "ужасы",
    "криминал",
    "мелодрама",
    "вестерн",
    "биография",
    "детский",
    "документальный",
    "история",
    "короткометражка",
    "музыка",
    "мюзикл",
    "приключения",
    "семейный",
    "спорт"
];
var animeGenres = [
    "боевик",
    "фэнтези",
    "фантастика",
    "триллер",
    "военный",
    "детектив",
    "комедия",
    "драма",
    "ужасы",
    "криминал",
    "мелодрама",
    "история",
    "короткометражка",
    "музыка",
    "приключения",
    "семейный",
    "спорт"
];
var MovieRepository = /** @class */ (function () {
    function MovieRepository(http) {
        this.http = http;
        this.currentPage = 1;
        this._genres = [filmGenres, tvSeriesGenres, cartoonGenres, animeGenres];
        this.searchQuery = "";
        this._movieImages = [];
        this._totalPages = 0;
        this._movieDetails = null;
        this._movies = [];
    }
    MovieRepository.prototype.getMovies = function (query) {
        var _this = this;
        this._movies = null;
        this._totalPages = 0;
        var url = API_BASE_URL + "/movie?token=".concat(API_KEY, "&limit=20");
        if (query)
            url += "&".concat(query);
        url += "&page=".concat(this.currentPage);
        console.log(url);
        this.http.get(url).subscribe(function (response) {
            _this._movies = response.docs;
            _this._totalPages = response.pages;
        });
    };
    MovieRepository.prototype.getMovieDetails = function (id) {
        var _this = this;
        var url = API_BASE_URL + "/movie?token=".concat(API_KEY, "&field=id&search=").concat(id);
        this.getMovieImages(id);
        this.http.get(url).subscribe(function (response) {
            _this._movieDetails = response;
        });
    };
    MovieRepository.prototype.getMovieImages = function (id) {
        var _this = this;
        this._movieImages = [];
        var url = IMAGES_API_BASE_URL + "/" + id + "/images";
        this.http.get(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": IMAGES_API_KEY
            }
        }).subscribe(function (response) {
            var _a, _b;
            _this._movieImages = [];
            for (var i = 0; i < 10 && i < ((_a = response.items) === null || _a === void 0 ? void 0 : _a.length); i++) {
                _this._movieImages.push((_b = response.items[i]) === null || _b === void 0 ? void 0 : _b.previewUrl);
            }
        });
    };
    Object.defineProperty(MovieRepository.prototype, "genres", {
        get: function () {
            return this._genres;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieRepository.prototype, "movieImages", {
        get: function () {
            return this._movieImages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieRepository.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieRepository.prototype, "movieDetails", {
        get: function () {
            return this._movieDetails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MovieRepository.prototype, "movies", {
        get: function () {
            return this._movies;
        },
        enumerable: false,
        configurable: true
    });
    MovieRepository = __decorate([
        (0, core_1.Injectable)()
    ], MovieRepository);
    return MovieRepository;
}());
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie-repository.component.js.map