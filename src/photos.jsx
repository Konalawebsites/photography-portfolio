// src/photos.jsx

export const albums = {
  album1: {
    name: "Työtaakka BTS",
    year: 2025,
    photos: Array.from({ length: 78 }, (_, i) => ({
      url: `/images/1/${i + 1}.jpg`,
      title: `BTS Työtaakka - Photo ${i + 1}`,
      id: i,
    })),
  },
  album2: {
    name: "Crna Gora",
    year: 2025,
    photos: Array.from({ length: 12 }, (_, i) => ({
      url: `/images/2/${i + 1}.jpg`,
      title: `Crna Gora - Photo ${i + 1}`,
      id: i,
    })),
  },
  album3: {
    name: "Fall..rocks and water",
    year: 2025,
    photos: Array.from({ length: 5 }, (_, i) => ({
      url: `/images/3/${i + 1}.jpg`,
      title: `Fall - Photo ${i + 1}`,
      id: i,
    })),
  },
};

// Frontpage images — stored in public/images/FP/
export const frontpageImages = [
  { url: '/images/FP/sonni.jpg', title: 'sonni', id: 0 },
  { url: '/images/FP/tunturi.jpg', title: 'tunturi', id: 1 },
  { url: '/images/FP/keke.jpg', title: 'keke', id: 2 },
  { url: '/images/FP/montenegro.jpg', title: 'montenegro', id: 3 },
];
