import tunturi from '/images/FP/tunturi.jpg';
import montenegro from '/images/FP/montenegro.jpg';
import sonni from '/images/FP/sonni.jpg';
import keke from '/images/FP/keke.jpg';


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
}

export const frontpageImages = [
  { url: sonni, title: 'sonni', id: 0 },
  { url: tunturi, title: 'tunturi', id: 1 },
  { url: keke, title: 'keke', id: 2 },
  { url: montenegro, title: 'montenegro', id: 3 },
];