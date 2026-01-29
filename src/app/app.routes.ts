import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'experience/:id',
    component: ExperienceDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
