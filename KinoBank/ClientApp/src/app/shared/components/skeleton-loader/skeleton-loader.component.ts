import { Component, Input } from "@angular/core";

@Component({
  selector: "skeleton-loader",
  templateUrl: "./skeleton-loader.component.html",
  styleUrls: ["./skeleton-loader.component.css"]
})
export class SkeletonLoaderComponent {
  @Input() width: string | null = null;
  @Input() height: string | null = null;;
  @Input() isCircle: boolean = false;

  getLoaderStyles() {
    const loaderStyles = {
      "width.px": this.width ? this.width : "",
      "height.px": this.height ? this.height : "",
      "border-radius": this.isCircle ? "50%" : ""
    };
    return loaderStyles;
  }
}
