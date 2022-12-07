import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { MovieCarouselComponent } from "./components/movie-carousel/movie-carousel.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { NextDirective } from "./directives/movie-carousel/next.directive";
import { PrevDirective } from "./directives/movie-carousel/prev.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from "./services/loader/loader.service";
import { MaterialModule } from "../material.module";
import { SkeletonLoaderComponent } from "./components/skeleton-loader/skeleton-loader.component";
import { ImageGalleryComponent } from "./components/image-gallery/image-gallery.component";
import { MovieSectionComponent } from "./components/movie-section/movie-section.component";
import { MovieCardPreloaderComponent } from "./components/movie-card-preloader/movie-card-preloader.component";
import { SocialMediaNumberPipe } from "./pipes/social-media-number.pipe";


@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule,
    RouterModule, BrowserAnimationsModule, MaterialModule],
    declarations: [NavBarComponent, MovieCardComponent, PaginationComponent,
    LoadingSpinnerComponent, MovieCarouselComponent, NextDirective,
    PrevDirective, SkeletonLoaderComponent, ImageGalleryComponent,
    MovieSectionComponent, MovieCardPreloaderComponent, SocialMediaNumberPipe],
    exports: [CommonModule, FormsModule, NavBarComponent,
    MovieCardComponent, PaginationComponent,
    LoadingSpinnerComponent, MovieCarouselComponent,
    SkeletonLoaderComponent, ImageGalleryComponent, MovieSectionComponent,
    MovieCardPreloaderComponent, SocialMediaNumberPipe],
    providers: [LoaderService]
})
export class SharingModule { }
