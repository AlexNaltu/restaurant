import React from "react";
import Container from "./Container";

function Special() {
  return (
    <Container>
      <div className="my-20">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange-300 font-bold ">Today's Special</h1>
          <p className="text-white font-extralight text-xs md:text-base lg:text-lg">these are today's special meals & desert</p>
        </div>
      </div>
    </Container>
  );
}

export default Special;
