import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, OnDestroy {
  private villageService = inject(VillageService);
  village = this.villageService.currentVillage;
  
  currentIndex = signal(0);
  private autoplayInterval: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide(): void {
    const gallery = this.village().gallery;
    this.currentIndex.update(i => (i + 1) % gallery.length);
  }

  prevSlide(): void {
    const gallery = this.village().gallery;
    this.currentIndex.update(i => (i - 1 + gallery.length) % gallery.length);
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }
}
