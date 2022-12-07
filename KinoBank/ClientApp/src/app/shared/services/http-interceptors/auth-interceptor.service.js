"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInterceptorService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        if (!req.url.includes(window.location.hostname))
            return next.handle(req);
        var token = this.authService.getToken();
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer ".concat(token)
                }
            });
        }
        return next.handle(req).pipe((0, operators_1.catchError)(function (error) {
            if (error instanceof http_1.HttpErrorResponse && error.status === 401) {
                _this.authService.logout();
                _this.router.navigate(['login']);
            }
            return (0, rxjs_1.throwError)(error);
        }));
    };
    AuthInterceptorService = __decorate([
        (0, core_1.Injectable)({
            providedIn: "root"
        })
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
exports.AuthInterceptorService = AuthInterceptorService;
//# sourceMappingURL=auth-interceptor.service.js.map