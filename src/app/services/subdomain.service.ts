import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubdomainService {
  
  getSubdomain(): string {
    const hostname = window.location.hostname;
    
    // Para desarrollo local
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      // Puedes cambiar esto para probar diferentes pueblos en desarrollo
      const params = new URLSearchParams(window.location.search);
      return params.get('village') || 'castiglione';
    }
    
    // Extraer el subdominio del hostname
    // Formato esperado: pueblo.comunaitalia.com
    const parts = hostname.split('.');
    
    if (parts.length >= 3) {
      return parts[0].toLowerCase();
    }
    
    // Si no hay subdominio, retornar el primero por defecto
    return 'castiglione';
  }
}
