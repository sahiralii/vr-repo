export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'Hair' | 'Skin' | 'Nails' | 'Grooming';
  price?: string;
  imageUrl: string;
}

export interface Booking {
  id?: string;
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  createdAt: any;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
}
