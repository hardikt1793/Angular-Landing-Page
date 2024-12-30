import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-banner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./banner.component.html",
  styleUrl: "./banner.component.scss",
})
export class BannerComponent {
  // banner details
  banner: {
    title: string;
    text: string;
    image: string;
  } = {
    title: "CIÊNCIAS\nHUMANAS",
    text: "Começar",
    image: "assets/images/img1.png",
  };
}
