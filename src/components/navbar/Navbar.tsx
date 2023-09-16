"use client";

import Link from "next/link";
import { Lobster } from "next/font/google";
import { BiRestaurant } from "react-icons/bi";
import { IoRestaurantSharp } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Cabin } from "next/font/google";
import Hero from "../Hero";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const cabin = Cabin({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  const pathname = usePathname();
  const [nav, SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!nav);
  };

  if (pathname.startsWith("/studio")) return null;

  return (
    <div className="custom-bg w-full h-[600px] bg-no-repeat bg-cover bg-center">
      <div className="absolute w-full h-[600px] bg-gradient-to-r from-black" />
      <div>
        <div className="flex justify-between sm:justify-around p-6 text-white items-center">
          <h1 className={`${lobster.className} text-xl sm:text-3xl lg:text-4xl font-black`}>MyPLEASURE</h1>
          <ul className={`${cabin.className} hidden sm:inline-flex gap-7 font-light text-xl lg:text-2xl`}>
            <Link
              href="/"
              className="hover:text-orange-300 .hover-me"
            >
              <li>Home</li>
            </Link>
            <Link
              href="/menu"
              className="hover:text-orange-300"
            >
              <li>Menu</li>
            </Link>
            <Link
              href="#gallery"
              className="hover:text-orange-300"
            >
              <li>Gallery</li>
            </Link>
            <Link
              href="#contact"
              className="hover:text-orange-300"
            >
              <li>Contact</li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="block sm:hidden z-10"
          >
            {nav ? <IoRestaurantSharp size={30} /> : <BiRestaurant size={30} />}
          </div>
          {/* Mobile Menu*/}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex w-[50%] h-screen bg-menu-custom bg-cover bg-no-repeat bg-center text-left ease-in duration-300 z-[2]"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex  w-full h-screen bg-menu-custom bg-cover bg-no-repeat bg-center text-left ease-in duration-300"
            }
          >
            <ul className={`${cabin.className} text-xl m-5 flex flex-col gap-5`}>
              <li className=" hover:text-orange-300">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-orange-300">
                <Link href="/menu">Menu</Link>
              </li>
              <li className=" hover:text-orange-300">
                <Link href="#gallery">Gallery</Link>
              </li>
              <li className=" hover:text-orange-300">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
