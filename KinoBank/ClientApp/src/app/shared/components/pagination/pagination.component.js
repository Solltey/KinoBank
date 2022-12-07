"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationComponent = void 0;
var core_1 = require("@angular/core");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(repo) {
        this.repo = repo;
        this.changePageEvent = new core_1.EventEmitter();
    }
    Object.defineProperty(PaginationComponent.prototype, "currentPage", {
        get: function () {
            return this.repo.currentPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "lastPage", {
        get: function () {
            return this.repo.totalPages;
        },
        enumerable: false,
        configurable: true
    });
    PaginationComponent.prototype.changePage = function (page) {
        if (page > 0 && page < this.repo.totalPages + 1)
            this.changePageEvent.emit(page);
    };
    Object.defineProperty(PaginationComponent.prototype, "pages", {
        get: function () {
            var _this = this;
            if (this.repo.totalPages > 1) {
                return Array(this.repo.totalPages).fill(0)
                    .map(function (x, i) {
                    var result = i + 1;
                    if (result >= _this.currentPage - 4 &&
                        result < _this.currentPage + 4 &&
                        result > 1 &&
                        result < _this.repo.totalPages)
                        return result;
                    return undefined;
                }).filter(function (value) { return value != undefined; });
            }
            else {
                return [];
            }
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, core_1.Output)()
    ], PaginationComponent.prototype, "changePageEvent", void 0);
    PaginationComponent = __decorate([
        (0, core_1.Component)({
            selector: "app-pagination",
            templateUrl: "./pagination.component.html",
            styleUrls: ["./pagination.component.css"]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map