import projektorihuone from '/images/FP/hills.png';
import koivu from '/images/FP/kukka.png';
import torredibole from '/images/FP/volcano.png';
import kukka from '/images/FP/masi.png';

export const albums = {
  album1: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album1-${i}/400/400`,
    title: `Album 1 - Photo ${i + 1}`,
    id: i,
  })),
  album2: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album2-${i}/400/400`,
    title: `Album 2 - Photo ${i + 1}`,
    id: i,
  })),
  album3: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album3-${i}/400/400`,
    title: `Album 3 - Photo ${i + 1}`,
    id: i,
  })),
  album4: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album4-${i}/400/400`,
    title: `Album 4 - Photo ${i + 1}`,
    id: i,
  })),
  album5: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album5-${i}/400/400`,
    title: `Album 5 - Photo ${i + 1}`,
    id: i,
  })),
  album6: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album6-${i}/400/400`,
    title: `Album 6 - Photo ${i + 1}`,
    id: i,
  })),
  album7: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album7-${i}/400/400`,
    title: `Album 7 - Photo ${i + 1}`,
    id: i,
  })),
  album8: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album8-${i}/400/400`,
    title: `Album 8 - Photo ${i + 1}`,
    id: i,
  })),
  album9: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album9-${i}/400/400`,
    title: `Album 9 - Photo ${i + 1}`,
    id: i,
  })),
  album10: Array.from({ length: 8 }, (_, i) => ({
    url: `https://picsum.photos/seed/album10-${i}/400/400`,
    title: `Album 10 - Photo ${i + 1}`,
    id: i,
  })),
};

export const frontpageImages = [
  { url: projektorihuone, title: 'Projektorihuone', id: 0 },
  { url: koivu, title: 'Koivu', id: 1 },
  { url: torredibole, title: 'Volcano', id: 2 },
  { url: kukka, title: 'Kukka', id: 3 },
];