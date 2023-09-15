import { Cabin, Lobster } from "next/font/google";
import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import Container from "../Container";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const cabin = Cabin({ subsets: ["latin"], weight: "500" });

function Footer() {
  return (
    <div className="pt-16 pb-8 bg-zinc-900">
      <Container>
        <div className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between text-white gap-4 lg:justify-center lg:gap-6 xl:gap-10">
          <h1 className={`${lobster.className} text-xl sm:text-3xl lg:text-4xl font-black `}>MyPLEASURE</h1>
          <div className={`${cabin.className} flex gap-16`}>
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
            <FooterList>
              <Link href="/">Contact Us</Link>
              <h2 className="font-black">Newsletter</h2>
            </FooterList>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
