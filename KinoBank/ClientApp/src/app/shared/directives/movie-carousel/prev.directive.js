"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrevDirective = void 0;
var core_1 = require("@angular/core");
var PrevDirective = /** @class */ (function () {
    function PrevDirective(elem) {
        this.elem = elem;
    }
    PrevDirective.prototype.getPreviousMovie = function () {
        this.movies.unshift(this.movies.pop());
    };
    __decorate([
        (0, core_1.Input)()
    ], PrevDirective.prototype, "movies", void 0);
    __decorate([
        (0, core_1.HostListener)("click")
    ], PrevDirective.prototype, "getPreviousMovie", null);
    PrevDirective = __decorate([
        (0, core_1.Directive)({
            selector: "[prevMovie]"
        })
    ], PrevDirective);
    return PrevDirective;
}());
exports.PrevDirective = PrevDirective;
//# sourceMappingURL=prev.directive.js.map