import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private villageService = inject(VillageService);
  village = this.villageService.currentVillage;
}
