import { Great_Vibes, Lora, Roboto } from 'next/font/google';

export const lora = Lora({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const great_vibes = Great_Vibes({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});
