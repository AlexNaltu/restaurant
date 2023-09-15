import React from "react";
import Container from "./Container";
import Image from "next/image";


function Review() {
  return (
    <div>
      <div className="w-full bg-zinc-900 pt-10 flex justify-center">
        <h1 className="text-md sm:text-xl md:text-3xl font-bold text-white  ">What people are saying about us</h1>
      </div>
      <div className="absolute w-full h-[200px] bg-black/50" />
      <div className="review-custom-bg w-full h-[200px] bg-no-repeat bg-cover bg-center flex justify-center">
        <Container>
          <div className="flex gap-4 items-center mt-10">
            <Image
              src="https://i.pinimg.com/564x/4e/bb/25/4ebb25560bf3bff8861bb4d8166b2d63.jpg"
              alt="/"
              width={70}
              height={50}
              className="rounded-full"
            />
            <p className="text-white text-xs sm:text-base font-lg ">
              I saw one of these in Barbados and I bought one. <br />
              this Food is complimentary. <br />
              talk about interest!!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Review;
