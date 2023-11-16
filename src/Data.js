import Fireboy from "./Images/FireboyDML.webp";
import Nicki from "./Images/Nicki.jpg";
import Cheque from "./Images/cheque.jpg";
import OmahLay from "./Images/Omah.jpg";
import Rema from "./Images/Rema.jpg";
import Burna from "./Images/burnaboy.webp";
import travelbeta from "./Images/travelbeta.jpg";
import airtel from "./Images/airtel.jpg";
import Qing from "./Images/Quin.png";
import Mayor from "./Images/Mayo.jpeg";
import Khaid from "./Images/Khaid.jpeg";
import Lojay from "./Images/Lojay.jpeg";
import Magixx from "./Images/Magixx.jpeg";
import NF from "./Images/NF.jpeg";
import Marsh from "./Images/Marsh.jpeg";
import Fire from "./Musics/Fireboy.mp3";
import Burn from "./Musics/Burna.mp3";
import Nick from "./Musics/Nicki.mp3";
import Rem from "./Musics/Rema.mp3";
import Che from "./Musics/Cheque.mp3";
import Omah from "./Musics/OmahLay.mp3";
import Qin from "./Musics/QingMadi.mp3";
import Mayo from "./Musics/Holy Father.mp3";
import Khai from "./Musics/Anabella.mp3";
import loja from "./Musics/Monalisa.mp3";
import Mars from "./Musics/Silence.mp3";
import F from "./Musics/NF.mp3";
import Mag from "./Musics/AllOver.mp3";
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
    Album: "Laughter, Goosebumps",
    duration: '03:07'
  },
  {
    artist: "NF",
    song: F,
    title: "Change",
    image: NF,
    Album: "The Search",
    duration: '03:55'
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
    artist: "Marshmello x Khaled",
    song: Mars,
    title: "Slience",
    image: Marsh,
    Album: "Forza Horizon",
    duration: '02:56'
  },
  {
    artist: "Cheque ft. Fireboy",
    title: "Hustler",
    song: Che,
    image: Cheque,
    Album: "Chequemate",
    duration: '03:00'
  },
  {
    artist: "Omah Lay",
    title: "Holy Ghost",
    song: Omah,
    image: OmahLay,
    Album: "Holy Ghost",
    duration: '03:06'
  },
  {
    artist: "Nicki Minaj",
    title: "Starships",
    song: Nick,
    image: Nicki,
    Album: "Pink Friday",
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
  {
    artist: "Qing ft BNXN",
    title: 'Ole',
    song: Qin,
    image: Qing,
    Album: "Unknown Album",
    duration: '02:51'
  },
  {
    artist: "Magixx",
    song: Mag,
    title: "All Over",
    image: Magixx,
    Album: "ATOM",
    duration: '02:55'
  },
  {
    artist: "Lojay x Sarz x Chris Brown",
    song: loja,
    title: "Monalisa",
    image: Lojay,
    Album: "Unknown Album",
    duration: '03:34'
  },
  {
    artist: "Khaid",
    song: Khai,
    title: "Anabella",
    image: Khaid,
    Album: "Unknown Album",
    duration: '02:04'
  },
  {
    artist: "Mayorkun x Victony",
    song: Mayo,
    title: "Holy Father",
    image: Mayor,
    Album: "Back in Office",
    duration: '03:05'
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


