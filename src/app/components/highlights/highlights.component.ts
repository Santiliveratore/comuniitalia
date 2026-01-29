import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VillageService } from '../../services/village.service';
import { Experience } from '../../models/village.model';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss'
})
export class HighlightsComponent {
  private villageService = inject(VillageService);
  village = this.villageService.currentVillage;

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
}
