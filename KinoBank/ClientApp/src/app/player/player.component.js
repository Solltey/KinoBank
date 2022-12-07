"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerComponent = void 0;
var core_1 = require("@angular/core");
var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.kinopoiskId = this.route.snapshot.paramMap.get('kinopoiskId');
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    };
    PlayerComponent.prototype.ngAfterViewInit = function () {
        initializePlayer();
    };
    PlayerComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-player',
            templateUrl: './player.component.html',
            styleUrls: ['./player.component.css']
        })
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map