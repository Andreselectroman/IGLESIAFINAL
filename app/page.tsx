import Banner from "@/components/banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

  
      <Banner />


      {/* <div className="grid grid-cols-2 items-center px-6">
        <div className="place-self-start">
          <h2 className="bg-clip-text text-transparent bg-[linear-gradient(99.75deg,_#ED1A3C_2.49%,_#FFFFFF_305.73%)] w-fit">
            {`// Sobre GNIT`}
          </h2>
          <div>
            <h3 className="text-xs lg:text-[3.125rem] leading-[3.8rem] font-bold pt-2">
              Comunidad cristiana de tecnología enfocada en el Evangelio
            </h3>

            <div className="pt-4 text-xl text-[#8E8E8E]">
              El objetivo de GNIT es explorar como la tecnología puede ser un papel fundamental en el servicio de la iglesia. Apoyamos a los desarrolladores cristianos a conocer mejor a Dios, y los guiamos para que sirvan a Dios atreves de la tecnología. Nos enfocamos en construir comunidades sólidas y glorificar a Jesucristo con el cumplimiento de la Gran Comisión a través de la tecnología.</div>
          </div>
          <div className="flex gap-x-20 pt-8 pb-10">
            <div className="flex flex-col gap-y-2">
              <RiCrossFill color="red" className="h-8 w-8" />
              <p className="border-b border-black text-xl">Evangelio</p>
              <p className="text-[#8E8E8E]">Nos inspiramos en la historia de Jesús. </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <TbShieldCheckFilled color="red" className="h-8 w-8" />
              <p className="border-b border-black text-xl">Tecnologias de la informacion</p>
              <p className="text-[#8E8E8E]">Nos inspiramos en la historia de Jesús. </p>
            </div>
          </div>
          <Button asChild>
            <Link href="/ver-mas" className="
    bg-[linear-gradient(99.75deg,#ED1A3C_2.49%,#FFFFFF_305.73%)] white">Ver mas</Link>
          </Button>
        </div>
        <div>
          <div className="object-cover h-[20rem] w-[10rem] lg:h-[47rem] lg:w-full relative">
            <Image src="/assets/imagenes.svg" layout="fill" alt="imagenes" />
          </div>
        </div>
      </div> */}

    </main>
  );
}
