import Fireboy from "./Images/Fireboy.jpg";
import Nicki from "./Images/Nicki.jpg";
import Cheque from "./Images/cheque.jpg";
import OmahLay from "./Images/Omah.jpg";
import Rema from "./Images/Rema.jpg";
import Burna from "./Images/Burna.jpg";
import travelbeta from "./Images/travelbeta.jpg";
import airtel from "./Images/airtel.jpg";
import Fire from "./Musics/Fireboy.mp3";
import Burn from "./Musics/Burnaboy.mp3";
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
    name: "Fireboy",
    song: Fire,
    image: Fireboy,
    Album: "Unkwown Album",
  },
  {
    name: "Burna Boy",
    song: Burn,
    image: Burna,
    Album: "Unkwown Album",
  },
  {
    name: "Cheque",
    song: Che,
    image: Cheque,
    Album: "Unkwown Album",
  },
  {
    name: "Omah Lay",
    song: Omah,
    image: OmahLay,
    Album: "Unkwown Album",
  },
  {
    name: "Nicki Minaj",
    song: Nick,
    image: Nicki,
    Album: "Unkwown Album",
  },
  {
    name: "Rema",
    song: Rem,
    image: Rema,
    Album: "Unkwown Album",
  },
];

export const Adverts = [
    {
        name: "Travelbeta",
        song: travel,
        image: travelbeta
    },
    {
        name: "airtel",
        song: air,
        image: airtel
    }
]

