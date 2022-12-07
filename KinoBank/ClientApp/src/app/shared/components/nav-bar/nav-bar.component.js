"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(repo, authService, router, loaderService, route) {
        var _this = this;
        this.repo = repo;
        this.authService = authService;
        this.router = router;
        this.loaderService = loaderService;
        this.route = route;
        this.destroySubject = new rxjs_1.Subject();
        this.isLoggedIn = false;
        this.typeNumber = 0;
        this.authService.authStatus
            .pipe((0, operators_1.takeUntil)(this.destroySubject))
            .subscribe(function (result) {
            _this.isLoggedIn = result;
        });
        var movieType = this.route.snapshot.url[0].path;
        switch (movieType) {
            case "films":
                this.typeNumber = 1;
                break;
            case "tv-series":
                this.typeNumber = 2;
                break;
            case "cartoons":
                this.typeNumber = 3;
                break;
            case "anime":
                this.typeNumber = 4;
                break;
        }
    }
    NavBarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(["/"]);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isAuthenticated();
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.destroySubject.next(true);
        this.destroySubject.complete();
    };
    NavBarComponent.prototype.searchByKeywords = function (keywords) {
        if (keywords != "") {
            var english = /^[A-Za-z0-9- ]*$/;
            var language = void 0;
            if (english.test(keywords)) {
                language = "alternativeName";
            }
            else {
                language = "name";
            }
            this.repo.searchQuery = "sortField[]=votes.kp&sortField[]=rating.kp&sortType[]=-1&sortType[]=-1&field=".concat(language, "&search=").concat(keywords, "&isStrict=false");
            this.repo.getMovies(this.repo.searchQuery);
            this.router.navigateByUrl("/search-results");
        }
    };
    Object.defineProperty(NavBarComponent.prototype, "genres", {
        get: function () {
            return this.repo.genres;
        },
        enumerable: false,
        configurable: true
    });
    NavBarComponent = __decorate([
        (0, core_1.Component)({
            selector: "app-nav-bar",
            templateUrl: "./nav-bar.component.html",
            styleUrls: ["./nav-bar.component.css"]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map