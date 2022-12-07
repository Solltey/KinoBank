"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieCardComponent = void 0;
var core_1 = require("@angular/core");
var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent(renderer) {
        this.renderer = renderer;
    }
    MovieCardComponent.prototype.ngAfterViewInit = function () {
        var _a, _b, _c, _d;
        var bgImage;
        if (((_a = this.movie.rating) === null || _a === void 0 ? void 0 : _a.kp) > 7.5)
            bgImage = "var(--very-good-rating-gradient)";
        else if (((_b = this.movie.rating) === null || _b === void 0 ? void 0 : _b.kp) >= 7)
            bgImage = "var(--good-rating-gradient)";
        else if (((_c = this.movie.rating) === null || _c === void 0 ? void 0 : _c.kp) >= 6.5)
            bgImage = "var(--normal-rating-gradient)";
        else
            bgImage = "var(--bad-rating-gradient)";
        this.renderer.setStyle((_d = this.ratingBackground) === null || _d === void 0 ? void 0 : _d.nativeElement, 'background-image', bgImage);
    };
    __decorate([
        (0, core_1.Input)()
    ], MovieCardComponent.prototype, "movie", void 0);
    __decorate([
        (0, core_1.ViewChild)("ratingBg", { static: false })
    ], MovieCardComponent.prototype, "ratingBackground", void 0);
    MovieCardComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-movie-card',
            templateUrl: './movie-card.component.html',
            styleUrls: ['./movie-card.component.css']
        })
    ], MovieCardComponent);
    return MovieCardComponent;
}());
exports.MovieCardComponent = MovieCardComponent;
//# sourceMappingURL=movie-card.component.js.map