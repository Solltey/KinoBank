"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.tokenKey = "token";
        this._authStatus = new rxjs_1.Subject();
        this.authStatus = this._authStatus.asObservable();
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.getToken() != null;
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(this.tokenKey);
    };
    AuthenticationService.prototype.init = function () {
        if (this.isAuthenticated())
            this.setAuthStatus(true);
    };
    AuthenticationService.prototype.login = function (item) {
        var _this = this;
        var url = "https://localhost:44304/api/Account/Login";
        return this.http.post(url, item)
            .pipe(rxjs_2.tap(function (loginResult) {
            if (loginResult.success && loginResult.token) {
                localStorage.setItem(_this.tokenKey, loginResult.token);
                _this.setAuthStatus(true);
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(this.tokenKey);
        this.setAuthStatus(false);
    };
    AuthenticationService.prototype.setAuthStatus = function (isAuthenticated) {
        this._authStatus.next(isAuthenticated);
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map