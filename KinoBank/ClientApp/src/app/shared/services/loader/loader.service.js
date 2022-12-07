"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderService = void 0;
var rxjs_1 = require("rxjs");
var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs_1.BehaviorSubject(false);
    }
    return LoaderService;
}());
exports.LoaderService = LoaderService;
//# sourceMappingURL=loader.service.js.map