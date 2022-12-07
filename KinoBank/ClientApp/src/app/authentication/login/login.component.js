"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var base_form_component_1 = require("../../shared/components/base-form.component");
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(activatedRoute, router, authService) {
        var _this = _super.call(this) || this;
        _this.activatedRoute = activatedRoute;
        _this.router = router;
        _this.authService = authService;
        _this.hide = true;
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.email,
                forms_1.Validators.minLength(6)
            ]),
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(8),
            ])
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginRequest = {};
        loginRequest.email = this.form.controls['email'].value;
        loginRequest.password = this.form.controls['password'].value;
        this.authService
            .login(loginRequest)
            .subscribe(function (result) {
            if (result.success) {
                _this.router.navigate(["/"]);
            }
        }, function (error) {
            if (error.status == 401) {
                _this.loginResult = error.error;
            }
        });
    };
    LoginComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}(base_form_component_1.BaseFormComponent));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map