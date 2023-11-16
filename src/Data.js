import Fireboy from "./Images/FireboyDML.webp";
import Nicki from "./Images/Nicki.jpg";
import Cheque from "./Images/cheque.jpg";
import OmahLay from "./Images/Omah.jpg";
import Rema from "./Images/Rema.jpg";
import Burna from "./Images/burnaboy.webp";
import travelbeta from "./Images/travelbeta.jpg";
import airtel from "./Images/airtel.jpg";
import Qing from "./Images/Quin.png";
import Fire from "./Musics/Fireboy.mp3";
import Burn from "./Musics/Burna.mp3";
import Nick from "./Musics/Nicki.mp3";
import Rem from "./Musics/Rema.mp3";
import Che from "./Musics/Cheque.mp3";
import Omah from "./Musics/OmahLay.mp3";
import Qin from "./Musics/QingMadi.mp3";
import air from "./Ads/Airtel.mp3";
import travel from "./Ads/travelbeta.mp3";
import { createContext } from "react";


export const MyContext = createContext('')

export const data = [
  // {
  //   name: "Scatter",
  //   song: Fire,
  //   image: Fireboy,
  //   Artist: " - Fireboy",
  // },
  {
    name: "Alone",
    song: Burn,
    image: Burna,
    Artist: " - Burna Boy",
  },
  {
    name: "History",
    song: Che,
    image: Cheque,
    Artist: " - Cheque ft. Fireboy",
  },
  {
    name: "Holy Ghost",
    song: Omah,
    image: OmahLay,
    Artist: " - Omah Lay",
  },
  {
    name: "Starships",
    song: Nick,
    image: Nicki,
    Artist: " - Nicki Minaj",
  },
  {
    name: "DND",
    song: Rem,
    image: Rema,
    Artist: " - Rema",
  },
  {
    name: "Ole",
    song: Qin,
    image: Qing,
    Artist: " - Qing Madi ft BNXN",
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


