import React from "react";
import Container from "./Container";

function Chefs() {
  return (
    <Container>
      <div className="my-20">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange-300 font-bold ">Our Chefs</h1>
          <p className="text-white font-extralight text-xs md:text-base lg:text-lg">The best chefs in the West Europe</p>
        </div>
      </div>
    </Container>
  );
}

export default Chefs;
