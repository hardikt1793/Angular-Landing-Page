import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  banner = {
    bannerTitle: 'CIÊNCIAS\nHUMANAS',
    buttonText: 'Começar',
    bannerImage: 'assets/images/img1.png',
  }

}
