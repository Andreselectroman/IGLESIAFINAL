import banner1 from "@/public/assets/banner/banner1.jpg";
import banner2 from "@/public/assets/banner/banner2.jpg";
import banner3 from "@/public/assets/banner/banner3.jpg";
import { text } from "stream/consumers";



// Data for Homepage Banner
export const bannerItems = [
  {
    id: 1,
    content: "Utilizamos la tecnologia centrada en el Evangelio.",
   
    texts: [
      "//Porque la Tierra sera llena del conocimiento",
      "de la gloria de Jehova como las aguas cubren",
      "la mar.",
    ],
    image: banner1,
    linkHref: "/contacto",
  },
  {
    id: 2,
    content: "Utilizamos la tecnologia centrada en el Evangelio.",
    
    texts: [
      "Hasta 50% de descuento en productos seleccionados.",
      "No te pierdas nuestras ventas relámpago cada viernes.",
    ],
    image: banner2,
    linkHref: "/contacto2",
  },
  {
    id: 3,
    content: "Utilizamos la tecnologia centrada en el Evangelio.",
   
    texts: [
      "Hasta 50% de descuento en productos seleccionados.",
      "No te pierdas nuestras ventas relámpago cada viernes.",
    ],
    image: banner3,
    linkHref: "/contacto3",
  },
] as const;
