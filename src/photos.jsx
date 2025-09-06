import rave from '/images/FP/rave.jpg';
import aasi from '/images/FP/aasi.jpg';
import tunturi from '/images/FP/tunturi.jpg';
import montenegro from '/images/FP/montenegro.jpg';
import punch from '/images/FP/punch.jpg';
import mountains from '/images/FP/mountains.jpg';
import cad from '/images/FP/cad.jpg';
import kukka from '/images/FP/kukka.png';
import kari from '/images/FP/kari.jpg';
import biking from '/images/FP/biking.jpg';
import sonni from '/images/FP/sonni.jpg';
import feather from '/images/FP/feather.jpg';
import sonnimirror from '/images/FP/sonni-mirror.jpeg';
import self2 from '/images/FP/self2.jpg';
import keke from '/images/FP/keke.jpg';
import tree from '/images/FP/tree.jpg';
import bushes2 from '/images/FP/bushes2.jpeg';
import self from '/images/FP/self.png';
import boat from '/images/FP/boat.jpg';
import lokkimirror from '/images/FP/lokkimirror.jpeg';

export const albums = {

  album2: {
    name: "Työtaakka BTS",
    year: 2025,
    photos: Array.from({ length: 78 }, (_, i) => ({
      url: `/images/1/${i + 1}.jpg`,
      title: `BTS Työtaakka - Photo ${i + 1}`,
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