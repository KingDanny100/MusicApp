import Fireboy from "./Images/FireboyDML.webp";
import Nicki from "./Images/Nicki.jpg";
import Cheque from "./Images/cheque.jpg";
import OmahLay from "./Images/Omah.jpg";
import Rema from "./Images/Rema.jpg";
import Burna from "./Images/burnaboy.webp";
import travelbeta from "./Images/travelbeta.jpg";
import airtel from "./Images/airtel.jpg";
import Fire from "./Musics/Fireboy.mp3";
import Burn from "./Musics/Burna.mp3";
import Nick from "./Musics/Nicki.mp3";
import Rem from "./Musics/Rema.mp3";
import Che from "./Musics/Cheque.mp3";
import Omah from "./Musics/OmahLay.mp3";
import air from "./Ads/Airtel.mp3";
import travel from "./Ads/travelbeta.mp3";
import { createContext } from "react";


export const MyContext = createContext('')

export const data = [
  {
    artist: "Fireboy",
    song: Fire,
    title: "Hello",
    image: Fireboy,
    Album: "Unknown Album",
    duration: '03:07'
  },
  {
    artist: "Burna Boy",
    song: Burn,
    title: "Common Person",
    image: Burna,
    Album: "Love, Damini",
    duration: '03:43'
  },
  {
    artist: "Cheque ft. Fireboy",
    title: "History",
    song: Che,
    image: Cheque,
    Album: "Unknown Album",
    duration: '03:00'
  },
  {
    artist: "Omah Lay",
    title: "Holy Ghost",
    song: Omah,
    image: OmahLay,
    Album: "Unknown Album",
    duration: '03:06'
  },
  {
    artist: "Nicki Minaj",
    title: "Hello",
    song: Nick,
    image: Nicki,
    Album: "Unknown Album",
    duration: '02:24'
  },
  {
    artist: "Rema",
    title: 'DND',
    song: Rem,
    image: Rema,
    Album: "Ravage",
    duration: '02:46'
  },
];

export const Adverts = [
    {
        artist: "Travelbeta",
        song: travel,
        image: travelbeta
    },
    {
        artist: "airtel",
        song: air,
        image: airtel
    }
]


