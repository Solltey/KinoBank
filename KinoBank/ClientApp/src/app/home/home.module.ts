import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SharingModule } from "../shared/sharing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule, RouterModule,
      FormsModule, SharingModule],
    exports: [HomeComponent]
})
export class HomeModule { }
