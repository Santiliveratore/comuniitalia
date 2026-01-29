import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private villageService = inject(VillageService);
  village = this.villageService.currentVillage;
  
  currentYear = new Date().getFullYear();

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
