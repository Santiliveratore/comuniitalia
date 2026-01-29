import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private villageService = inject(VillageService);
  private sanitizer = inject(DomSanitizer);
  village = this.villageService.currentVillage;

  scrollToAbout(): void {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getMapUrl(): SafeResourceUrl {
    const coords = this.village().coordinates;
    if (coords) {
      // Usando Google Maps embed sin API key
      const url = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }
}
