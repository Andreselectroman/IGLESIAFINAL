import banner1 from "@/public/assets/banner/banner1.jpg";
import banner2 from "@/public/assets/banner/banner2.jpg";
import banner3 from "@/public/assets/banner/banner3.jpg";



// Data for Homepage Banner
export const bannerItems = [
  {
    id: 1,
    content: "Ea minim reprehenderit eiusmod eu mollit.",
    linkText: "Nisi exercitation proident culpa ad duis.",
    image: banner1,
    linkHref: "/contacto",
  },
  {
    id: 2,
    content: "Ipsum non consequat minim ea officia est tempor.",
    linkText: "Voluptate cupidatat dolore anim nisi officia deserunt nostrud culpa enim irure sunt.",
    image: banner2,
    linkHref: "/contacto2",
  },
  {
    id: 3,
    content: "Cillum velit tempor tempor tempor ipsum occaecat.",
    linkText: "Irure excepteur velit culpa aute ut ea dolore duis.",
    image: banner3,
    linkHref: "/contacto3",
  },
] as const;
