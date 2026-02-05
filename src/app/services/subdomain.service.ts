import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubdomainService {
  
  getSubdomain(): string {
    const hostname = window.location.hostname;
    
    // Para desarrollo local
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      const params = new URLSearchParams(window.location.search);
      return params.get('village') || 'alba';
    }
    
    // Extraer el subdominio del hostname
    // Formato esperado: pueblo.comuniitalia.com
    const parts = hostname.split('.');
    
    // Si el hostname es algo como alba.comuniitalia.com
    if (parts.length >= 3) {
      return parts[0].toLowerCase();
    }
    
    // Si es solo comuniitalia.com sin subdominio, mostrar alba por defecto
    if (hostname.includes('comuniitalia.com') || hostname.includes('github.io')) {
      return 'alba';
    }
    
    // Fallback
    return 'alba';
  }
}
