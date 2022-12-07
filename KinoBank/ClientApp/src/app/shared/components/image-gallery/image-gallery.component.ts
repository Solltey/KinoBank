import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.css"]
})
export class ImageGalleryComponent {
  @Input() imageUrls!: string[];
  @Input() currentImage: number = 0;
  @Output() closeGallery: EventEmitter<any> = new EventEmitter();

  nextImage() {
    if (this.currentImage < this.imageUrls.length - 1)
      this.currentImage++;
    else
      this.currentImage = 0;
  }

  previousImage() {
    if (this.currentImage > 0)
      this.currentImage--;
    else
      this.currentImage = this.imageUrls.length - 1;
  }

  close() {
    this.closeGallery.emit(null);
  }
}
