"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFormComponent = void 0;
var core_1 = require("@angular/core");
var BaseFormComponent = /** @class */ (function () {
    function BaseFormComponent() {
    }
    BaseFormComponent.prototype.getErrors = function (control, displayName) {
        var errors = [];
        Object.keys(control.errors || {}).forEach(function (key) {
            switch (key) {
                case 'required':
                    errors.push("".concat(displayName, " is required."));
                    break;
                case 'pattern':
                    errors.push("".concat(displayName, " contains invalid characters."));
                    break;
                case 'isDupeField':
                    errors.push("".concat(displayName, " already exists: please choose another."));
                    break;
                case 'email':
                    errors.push("Enter a valid email address.");
                    break;
                case 'minlength':
                    errors.push("".concat(displayName, " min length is 8."));
                    break;
                default:
                    errors.push("".concat(displayName, " is invalid."));
                    break;
            }
        });
        return errors;
    };
    BaseFormComponent = __decorate([
        (0, core_1.Component)({
            template: ''
        })
    ], BaseFormComponent);
    return BaseFormComponent;
}());
exports.BaseFormComponent = BaseFormComponent;
//# sourceMappingURL=base-form.component.js.map