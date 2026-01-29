import { Injectable, signal, computed } from '@angular/core';
import { Village, Experience } from '../models/village.model';
import { VILLAGES_DATA } from '../data/villages.data';
import { SubdomainService } from './subdomain.service';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  private villages = signal<Village[]>(VILLAGES_DATA);
  private currentVillageId = signal<string>('');
  
  currentVillage = computed(() => {
    const id = this.currentVillageId();
    return this.villages().find(v => v.id === id) || this.villages()[0];
  });

  constructor(private subdomainService: SubdomainService) {
    this.initializeVillage();
  }

  private initializeVillage(): void {
    const subdomain = this.subdomainService.getSubdomain();
    const village = this.villages().find(v => v.id === subdomain);
    
    if (village) {
      this.currentVillageId.set(village.id);
    } else {
      // Si no se encuentra el pueblo, usar el primero
      this.currentVillageId.set(this.villages()[0].id);
    }
  }

  getVillage(): Village {
    return this.currentVillage();
  }

  getExperiences(): Experience[] {
    return this.currentVillage().experiences;
  }

  getExperienceById(id: string): Experience | undefined {
    return this.currentVillage().experiences.find(exp => exp.id === id);
  }

  getAllVillages(): Village[] {
    return this.villages();
  }

  setVillageById(id: string): void {
    const village = this.villages().find(v => v.id === id);
    if (village) {
      this.currentVillageId.set(id);
    }
  }
}
