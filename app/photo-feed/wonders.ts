import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export interface WonderImage {
  id: string;
  name: string;
  src: StaticImageData;        // or StaticImageData (Next.js)
  history: string;
  location: string;
}
const WondersImages: WonderImage[] = [
    {
        id:"1",
        name:"The Pyramid at Chichén Itzá (before 800 A.D.)",
        src: photo1,
        history: "Chichén Itzá, the most famous Mayan temple city, served as the political and economic centre of the Mayan civilization. Its various structures - the pyramid of Kukulkan, the Temple of Chac Mool, the Hall of the Thousand Pillars, and the Playing Field of the Prisoners – can still be seen today and are demonstrative of an extraordinary commitment to architectural space and composition. The pyramid itself was the last, and arguably the greatest, of all Mayan temples",
        location: "Yucatan Peninsula, Mexico"
    },
    {
        id:"2",
        name:"Christ the Redeemer (1931) Rio de Janeiro",
        src: photo2,
        history: "This statue of Jesus stands some 38 meters tall, a top the Corcovado mountain overlooking Rio de Janeiro. Designed by Brazilian Heitor da Silva Costa and created by French sculptor Paul Landowski, it is one of the world’s best-known monuments. The statue took five years to construct and was inaugurated on October 12, 1931. It has become a symbol of the city and of the warmth of the Brazilian people, who receive visitors with open arms",
        location: "Brazil"
    },
    {
        id:"3",
        name:" The Roman Colosseum (70 - 82 A.D.) Rome",
        src: photo3,
        history: "This great amphitheatre in the centre of Rome was built to give favours to successful legionnaires and to celebrate the glory of the Roman Empire. Its design concept still stands to this very day, and virtually every modern sports stadium some 2,000 years later still bears the irresistible imprint of the Colosseum's original design. Today, through films and history books, we are even more aware of the cruel fights and games that took place in this arena, all for the joy of the spectators",
        location: "Italy"
    },
    {
        id:"4",
        name:"The Taj Mahal (1630 A.D.) Agra",
        src: photo4,
        history: "This immense mausoleum was built on the orders of Shah Jahan, the fifth Muslim Mogul emperor, to honour the memory of his beloved late wife. Built out of white marble and standing in formally laid-out walled gardens, the Taj Mahal is regarded as the most perfect jewel of Muslim art in India. The emperor was consequently jailed and, it is said, could then only see the Taj Mahal out of his small cell window",
        location: "Agra, India"
    },
    {
        id:"5",
        name:"The Great Wall of China (220 B.C and 1368 - 1644 A.D.)",
        src: photo5,
        history: "The Great Wall of China was built to link existing fortifications into a united defence system and better keep invading Mongol tribes out of China. It is the largest man-made monument ever to have been built and it is disputed that it is the only one visible from space. Many thousands of people must have given their lives to build this colossal construction",
        location: "China"
    },
    {
        id:"6",
        name:"Machu Picchu (1460-1470)",
        src: photo6,
        history: "In the 15th century, the Incan Emperor Pachacútec built a city in the clouds on the mountain known as Machu Picchu . This extraordinary settlement lies halfway up the Andes Plateau, deep in the Amazon jungle and above the Urubamba River. It was probably abandoned by the Incas because of a smallpox outbreak and, after the Spanish defeated the Incan Empire, the city remained 'lost' for over three centuries. It was rediscovered by Hiram Bingham in 1911",
        location: "Peru"
    },
    {
        id:"7",
        name:"Petra (9 B.C. - 40 A.D.)",
        src: photo7,
        history: "On the edge of the Arabian Desert, Petra was the glittering capital of the Nabataean empire of King Aretas IV (9 B.C. to 40 A.D.). Masters of water technology, the Nabataeans provided their city with great tunnel constructions and water chambers. A theatre, modelled on Greek-Roman prototypes, had space for an audience of 4,000. Today, the Palace Tombs of Petra, with the 42-meter-high Hellenistic temple facade on the El-Deir Monastery, are impressive examples of Middle Eastern culture",
        location: "Jordan"
    },
]

export default WondersImages;
