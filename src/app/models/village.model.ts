export interface Village {
  id: string;
  name: string;
  region: string;
  country: string;
  population: number;
  description: string;
  longDescription: string;
  heroImage: string;
  coatOfArms?: string;
  founded?: string;
  altitude?: number;
  area?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
  gallery: string[];
  experiences: Experience[];
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
    website?: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery?: string[];
  category: 'nature' | 'culture' | 'gastronomy' | 'history' | 'adventure' | 'wellness';
  link?: string;
}
