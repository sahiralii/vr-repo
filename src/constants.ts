import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hair-styling',
    name: 'Advanced Hair Styling',
    category: 'Hair',
    description: 'Expert styling tailored to your face shape and hair texture.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'men-grooming',
    name: 'Executive Grooming',
    category: 'Grooming',
    description: 'Precision beard line-ups and hot towel shaves for the modern man.',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'skin-rejuvenation',
    name: 'Botanical Facial',
    category: 'Skin',
    description: 'Natural ingredients to restore your skin\'s healthy glow.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619992-25420515109c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'nail-art',
    name: 'Couture Nail Art',
    category: 'Nails',
    description: 'Sophisticated nail designs and luxury manicures.',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df490651e619?q=80&w=800&auto=format&fit=crop',
  }
];

export const REVIEWS = [
  {
    id: '1',
    author: 'Sunil K.',
    rating: 5,
    text: 'The most professional salon in Naigaon. The hygiene standards are top-notch and the staff is very skilled.',
  },
  {
    id: '2',
    author: 'Priya M.',
    rating: 5,
    text: 'Loved my hair color transformation. They really listen to what you want and deliver even better results.',
  },
  {
    id: '3',
    author: 'Rahul S.',
    rating: 4,
    text: 'Great experience. The grooming service was precise and extremely relaxing. Highly recommended.',
  }
];
