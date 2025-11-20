
export enum Page {
  HOME = 'home',
  DESIGN = 'design',
  PHOTOGRAPHY = 'photography',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
  x: number;
  y: number;
  rotation: number;
  // Detailed Case Study Fields
  client: string;
  year: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export interface Photo {
  id: number;
  src: string;
  title: string;
  category: 'URBAN' | 'NATURE' | 'ABSTRACT' | 'PORTRAIT';
  date: string;
  exif: {
    iso: number;
    aperture: string;
    shutter: string;
    camera: string;
  };
  glitchColor: string;
  description: string;
}
