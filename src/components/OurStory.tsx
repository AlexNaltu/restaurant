import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

function OurStory() {
  return (
    <Container>
      {" "}
      <div className="my-10 sm:my-20 p-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-5 xl:gap-10">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 my-8 md:my-12">
              <Image
                src="https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="/"
                width={300}
                height={300}
              />
              <Image
                src="https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="/"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src="https://images.unsplash.com/photo-1615480790440-857ddab70034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="/"
                width={300}
                height={300}
              />
              <Image
                src="https://images.unsplash.com/photo-1549648184-0d3e8b8684fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="/"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="w-2/4 sm:w-1/3 lg:w-1/6 flex flex-col gap-5 self-start mx-8">
            <h1 className="text-lg sm:text-xl lg:text-3xl text-orange-300 font-bold xl:text-4xl">Our Story</h1>
            <p className="text-white font-extralight text-xs md:text-base lg:text-lg">
              Homemade cookies brought the sparkle this holiday season, and this virtual calendar showered readers in Italian
              rainbow cookies, savory Cheddar coins, minty lime bars and figgy cookie pies.
            </p>
            <Link
              href="/"
              className="font-black text-white text-sm lg:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OurStory;
