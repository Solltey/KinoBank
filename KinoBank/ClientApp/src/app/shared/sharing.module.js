"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharingModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var loading_spinner_component_1 = require("./components/loading-spinner/loading-spinner.component");
var movie_card_component_1 = require("./components/movie-card/movie-card.component");
var movie_carousel_component_1 = require("./components/movie-carousel/movie-carousel.component");
var nav_bar_component_1 = require("./components/nav-bar/nav-bar.component");
var pagination_component_1 = require("./components/pagination/pagination.component");
var next_directive_1 = require("./directives/movie-carousel/next.directive");
var prev_directive_1 = require("./directives/movie-carousel/prev.directive");
var animations_1 = require("@angular/platform-browser/animations");
var loader_service_1 = require("./services/loader/loader.service");
var material_module_1 = require("../material.module");
var SharingModule = /** @class */ (function () {
    function SharingModule() {
    }
    SharingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [common_1.CommonModule, forms_1.FormsModule, platform_browser_1.BrowserModule,
                router_1.RouterModule, animations_1.BrowserAnimationsModule, material_module_1.MaterialModule],
            declarations: [nav_bar_component_1.NavBarComponent, movie_card_component_1.MovieCardComponent, pagination_component_1.PaginationComponent,
                loading_spinner_component_1.LoadingSpinnerComponent, movie_carousel_component_1.MovieCarouselComponent, next_directive_1.NextDirective,
                prev_directive_1.PrevDirective],
            exports: [common_1.CommonModule, forms_1.FormsModule, nav_bar_component_1.NavBarComponent,
                movie_card_component_1.MovieCardComponent, pagination_component_1.PaginationComponent,
                loading_spinner_component_1.LoadingSpinnerComponent, movie_carousel_component_1.MovieCarouselComponent],
            providers: [loader_service_1.LoaderService]
        })
    ], SharingModule);
    return SharingModule;
}());
exports.SharingModule = SharingModule;
//# sourceMappingURL=sharing.module.js.map