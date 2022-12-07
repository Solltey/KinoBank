"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var home_module_1 = require("./home/home.module");
var movie_component_1 = require("./movie/movie.component");
var player_component_1 = require("./player/player.component");
var sharing_module_1 = require("./shared/sharing.module");
var search_results_component_1 = require("./search-results/search-results.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var loader_interceptor_service_1 = require("./shared/services/http-interceptors/loader-interceptor.service");
var auth_interceptor_service_1 = require("./shared/services/http-interceptors/auth-interceptor.service");
var login_component_1 = require("./authentication/login/login.component");
var movies_component_1 = require("./movies/movies.component");
var material_module_1 = require("./material.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                movie_component_1.MovieComponent,
                player_component_1.PlayerComponent,
                search_results_component_1.SearchResultsComponent,
                page_not_found_component_1.PageNotFoundComponent,
                movies_component_1.MoviesComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                material_module_1.MaterialModule,
                forms_1.FormsModule,
                home_module_1.HomeModule,
                sharing_module_1.SharingModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: loader_interceptor_service_1.LoaderInterceptorService, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_interceptor_service_1.AuthInterceptorService, multi: true }
            ],
            exports: [player_component_1.PlayerComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map