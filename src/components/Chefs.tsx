import React from "react";
import Container from "./Container";
import { ChefData } from "@/data/ChefData";
import Image from "next/image";

function Chefs() {
  return (
    <Container>
      <div className="my-20">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange-300 font-bold ">Our Chefs</h1>
          <p className="text-white font-extralight text-xs md:text-base lg:text-lg">The best chefs in the West Europe</p>
        </div>
        <div className="flex flex-col items-center sm:flex-row justify-center gap-5 my-10">
          {ChefData.map((item, index) => (
            <div key={index}>
              <div className="bg-zinc-500 w-fit">
                <Image
                  src={item.image}
                  alt="/"
                  width={200}
                  height={200}
                />
                <p className="text-white font-bold p-5 text-xs">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Chefs;
