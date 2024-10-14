import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/global/footer";

import NavigationBar from "@/components/navigation-bar";


const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "GNIT ministerio de tecnologia",
  description: "GNIT ministerio de tecnologia colombia",
  icons: [
    {
      rel: "icon",
      href: "/assets/logo.svg",
      url: "/assets/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable}`}>
        <div className="flex items-center w-full p-4">
          <div className="w-24 h-10 object-cover relative">
            <Image
              src={"/assets/logo.svg"}
              layout="fill"
              alt="logo" />
          </div>
          <NavigationBar />
          <Button asChild className="ml-4">
            <Link href="/donacion" className="bg-[linear-gradient(99.75deg,#ED1A3C_2.49%,#FFFFFF_305.73%)] white text-xs">Donar</Link>
          </Button>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
