import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VillageService } from '../../services/village.service';
import { Experience } from '../../models/village.model';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private villageService = inject(VillageService);
  
  village = this.villageService.currentVillage;
  experience = signal<Experience | undefined>(undefined);
  currentImageIndex = signal(0);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const experienceId = params['id'];
      const exp = this.villageService.getExperienceById(experienceId);
      this.experience.set(exp);
    });
  }

  getCategoryIcon(category: Experience['category']): string {
    const icons: Record<Experience['category'], string> = {
      nature: '🌿',
      culture: '🎭',
      gastronomy: '🍷',
      history: '🏛️',
      adventure: '🎒',
      wellness: '💆'
    };
    return icons[category];
  }

  getCategoryLabel(category: Experience['category']): string {
    const labels: Record<Experience['category'], string> = {
      nature: 'Natura',
      culture: 'Cultura',
      gastronomy: 'Gastronomia',
      history: 'Storia',
      adventure: 'Avventura',
      wellness: 'Benessere'
    };
    return labels[category];
  }

  getAllImages(): string[] {
    const exp = this.experience();
    if (!exp) return [];
    return [exp.image, ...(exp.gallery || [])];
  }

  setCurrentImage(index: number): void {
    this.currentImageIndex.set(index);
  }

  nextImage(): void {
    const images = this.getAllImages();
    this.currentImageIndex.update(i => (i + 1) % images.length);
  }

  prevImage(): void {
    const images = this.getAllImages();
    this.currentImageIndex.update(i => (i - 1 + images.length) % images.length);
  }
}
