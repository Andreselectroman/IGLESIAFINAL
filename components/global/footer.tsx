import Image from "next/image";
import Link from "next/link";
import { Youtube, Linkedin } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-background">
                <div className="container pb-14 pt-20">
                    <div className="flex flex-wrap gap-8 lg:flex-nowrap">
                        <div className="flex flex-col">
                            <Link href="/">
                                <Image src={"/assets/logo.svg"} alt="Logo" width={160} height={160} />
                            </Link>
                            <div className="basis-full lg:basis-1/2 pt-4">
                                <ul className="flex items-center justify-center lg:justify-end">
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <FaFacebook size={30} className="w-4 h-4" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <BsTwitter className="w-4 h-4" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <Linkedin size={30} className="w-4 h-4" />
                                        </Link>
                                    </li>
                                    <li className="ml-3 w-8">
                                        <Link href="#" target="_blank">
                                            <Youtube size={30} className="w-4 h-4" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="flex justify-between border-b-2 border-blue-500 pb-2">
                            <li className="px-4">
                                <h3 className="font-bold text-xs">Bienvenidos</h3>
                                <ul className="mt-2 space-y-1 text-xs">
                                    <li>Estado de la misión</li>
                                    <li>Liderazgo</li>
                                    <li>Historia</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold text-xs">Socios</h3>
                                <ul className="mt-2 space-y-1 text-xs">
                                    <li>Declaración de Fé</li>
                                    <li>Post a freelance project</li>
                                    <li>Que hacemos</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold text-xs">Proyectos</h3>
                                <ul className="mt-2 space-y-1 text-xs">
                                    <li>Red</li>
                                    <li>Noticias</li>
                                    <li>Eventos</li>
                                </ul>
                            </li>
                            <li className="px-4">
                                <h3 className="font-bold text-xs">Aprendiendo</h3>
                                <ul className="mt-2 space-y-1 text-xs">
                                    <li>Recursos</li>
                                    <li>Donación</li>
                                    <li>Contáctanos</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="bg-primary-main">
                    <div className="flex flex-wrap items-center justify-center lg:flex-nowrap w-full pb-2">
                        <div className="basis-full lg:basis-1/2">
                            <p className="mb-4 text-center leading-6  lg:mb-0 lg:text-left text-xs">
                                &copy; Copyrights GNIT - colombia Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Footer;
