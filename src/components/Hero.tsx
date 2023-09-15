import { Lobster } from "next/font/google";
import Link from "next/link";
import React from "react";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function Hero() {
  return (
    <div className="mx-auto p-3 mt-10 lg:mt-20">
      <div className="text-white flex flex-col items-center text-center gap-6">
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold">Good Food,Great Vibes</h1>
        <p className="text-xs sm:text-base md:text-lg font-extralight">
          At <span className={`${lobster.className}`}>MyPLEASURE</span> you will find only the best food in Europe.Professionals
          Chefs <br /> and the best Employees
        </p>
        <Link
          href="/"
          className={`${lobster.className} bg-orange-300 px-4 py-2 sm:px-6 sm:py-3 hover:bg-orange-500 transition ease-in duration-300 rounded-sm`}
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}

export default Hero;
