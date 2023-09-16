"use client";

import { Cabin, Lobster } from "next/font/google";
import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import Container from "../Container";
import { usePathname } from "next/navigation";
import HoverCr from "@/utils/HoverCard";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const cabin = Cabin({ subsets: ["latin"], weight: "500" });

function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  return (
    <div className="pt-16 pb-10 bg-zinc-900">
      <Container>
        <div className=" flex flex-col md:flex-row justify-around text-white gap-4 lg:gap-6 xl:gap-10">
          <h1 className={`${lobster.className} text-xl sm:text-3xl lg:text-4xl font-black `}>MyPLEASURE</h1>
          <div className={`${cabin.className} flex flex-col md:flex-row gap-8 md:gap-20`}>
            <FooterList>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
            </FooterList>
            <FooterList>
              <Link href="/">Menu</Link>
              <Link href="/">Reservation</Link>
              <Link href="/">Gallery</Link>
            </FooterList>
            <HoverCr />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
