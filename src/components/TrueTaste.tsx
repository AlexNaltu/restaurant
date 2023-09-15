import { Lobster } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function TrueTaste() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center my-10">
        <div className="w-2/3 sm:w-1/3 lg:w-2/12 flex flex-col gap-4 md:gap-5 lg:gap-7 items-start text-white">
          <h1 className="text-lg lg:text-xl xl:text-2xl font-bold">Discorver the True Meaning of Taste.</h1>
          <p className="text-xs sm:text-sm md:text-base font-extralight">
            The sense of taste, also called gustation, allows us to perceive different flavors from the substances we eat and
            drink. Just like the other sensory systems, taste relies on the activation of special receptors on the tongue and
            mouth
          </p>
          <Link
            href="/"
            className={`${lobster.className} bg-orange-300 px-4 py-2 sm:px-6 sm:py-3 hover:bg-orange-500 transition ease-in duration-300 rounded-sm text-black`}
          >
            Book a Table
          </Link>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1289&q=80"
          alt="/"
          width={300}
          height={100}
          className="px-4"
        />
      </div>
    </Container>
  );
}

export default TrueTaste;
