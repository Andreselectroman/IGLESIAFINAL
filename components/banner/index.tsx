"use client"; // Indica que el componente se ejecuta en el cliente
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"; // Importa la biblioteca de relación de aspecto
import Image from "next/image"; // Importa el componente Image de Next.js
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"; // Importa el carrusel
import { bannerItems } from "@/lib/data"; // Importa los elementos del banner
import { type CarouselApi } from "@/components/ui/carousel"; // Importa el tipo de API del carrusel
import { useEffect, useState } from "react"; // Importa hooks de React
import Autoplay from "embla-carousel-autoplay"; // Importa el plugin de autoplay

const AspectRatio = AspectRatioPrimitive.Root; // Define el componente de relación de aspecto

const Banner = () => {
  const [api, setApi] = useState<CarouselApi>(); // Estado para la API del carrusel
  const [current, setCurrent] = useState(0); // Estado para el elemento actual del carrusel

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1); // Actualiza el índice actual
    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1); // Actualiza el índice al hacer scroll
    });
  }, [api]);

  return (
    <>
      {/* Carrusel existente */}
      <Carousel
        setApi={setApi} // Establece la API del carrusel
        opts={{ loop: true }} // Opciones del carrusel
        plugins={[
          Autoplay({
            delay: 5000, // Retraso del autoplay
          }),
        ]}
      >
        <CarouselContent className="relative ml-0">
          {bannerItems.map((item) => (
            <CarouselItem
              key={item.id}
              className={`relative overflow-hidden pl-0 text-white before:absolute before:z-10 before:size-full before:bg-black/15 before:content-[''] ${
                current === item.id ? "active" : ""
              }`}
            >
              <Image
                src={item.image}
                alt="homepage banner image"
                fill={true}
                className="object-cover"
              />
              <div
                className={`relative top-0 z-10 w-full py-[80px] md:py-[150px] lg:py-[300px]`}
              >
                <div className="container">
                  <div className="carousel-caption">
                    <h2
                      className={`mb-5 max-w-full text-3xl font-bold uppercase leading-tight transition delay-500 duration-1000 sm:w-full sm:text-xl md:text-2xl lg:w-2/3 lg:text-4xl ${
                        current === item.id
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      {item.content}
                    </h2>
                    {item.texts.map((text, index) => (
                      <p
                        key={index}
                        className={`transition delay-700 duration-1000 ${
                          current === item.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Imágenes superpuestas con inclinación y separación */}
        <div className="relative flex justify-center mt-8">
          <div className="relative">
            {/* Imagen 1: la de más arriba */}
            <AspectRatio
              ratio={16 / 9}
              style={{
                position: "absolute",
                top: "50px",  // Ajusta la posición vertical
                left: "50px",  // Ajusta la posición horizontal
                width: '200px',
                height: '330px',
                borderRadius: '50px',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.5)', // Sombra
                transform: 'rotate(60deg)', // Rotación
                zIndex: 19, // Nivel de z
                margin: "250px", // o margenes individuales marginTop, marginRight, etc.
                marginTop: "250px",    // Margen superior
                marginRight: "1px",  // Margen derecho
                marginBottom: "10px", // Margen inferior
                marginLeft: "210px",    // Margen izquierdo
              }}
            >
              <Image
                src="/assets/1.svg"
                alt="Image 1"
                fill={true}
                className="object-cover rounded-[30px]" // Redondeo personalizado
              />
            </AspectRatio>
          
            {/* Imagen 2: la del medio, ligeramente sobrepuesta */}
            <AspectRatio
              ratio={16 / 9}
              style={{
                position: "absolute",
                top: "350px", // Ajusta la posición vertical
                left: "220px", // Ajusta la posición horizontal
                width: '200px',
                height: '330px',
                borderRadius: '30px',
                boxShadow: '0 10px 75px rgba(0, 0, 0, 0.5)',
                transform: 'rotate(60deg)',
                zIndex: 20,
                margin: "50px", // o margenes individuales marginTop, marginRight, etc.
              
                marginTop: "130px",    // Margen superior
                marginRight: "1px",  // Margen derecho
                marginBottom: "10px", // Margen inferior
                marginLeft: "170px",    // Margen izquierdo
              }}
            >
             <Image
  src="/assets/3.svg"
  alt="Image 2"
  fill={true}
  className="object-cover rounded-[30px]" // Redondeo personalizado
  />
            </AspectRatio>
           
            {/* Imagen 3: la de más abajo */}
            <AspectRatio
              ratio={16 / 9}
              style={{
                position: "absolute",
                top: "300px", // Ajusta la posición vertical
                left: "800px", // Ajusta la posición horizontal
                width: '200px',
                height: '330px',
                borderRadius: '30px',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.5)',
                transform: 'rotate(60deg)',
                zIndex: 10,
                margin: "50px", // o margenes individuales marginTop, marginRight, etc.
              
                marginTop: "10px",    // Margen superior
                marginRight: "1px",  // Margen derecho
                marginBottom: "10px", // Margen inferior
                marginLeft: "80px",    // Margen izquierdo
                
              }}
            >
              <Image
                src="/assets/2.svg"
                alt="Image 3"
                fill={true}
                
                className="object-cover rounded-[30px]" // Redondeo personalizado
              />
            </AspectRatio>
            </div></div>
            
      </Carousel>
    </>
  );
};

export default Banner; // Exporta el componente
