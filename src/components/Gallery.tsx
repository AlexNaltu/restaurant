import React from "react";
import Container from "./Container";
import Image from "next/image";

function Gallery() {
  return (
    <Container>
      <div className="my-20">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">Gallery</h1>
            <p className="text-white font-extralight text-xs md:text-base lg:text-lg text-center">
              Here are some photos made with our meals for you.
              <br /> Hope you like what you see
            </p>
          </div>
          <div className="flex gap-4 p-2">
            <Image
              src="https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80"
              width={100}
              height={0}
              alt="/"
              className="rounded-md transition hover:scale-105 duration-300 ease-in  h-full w-[100px] sm:w-[150px] md:w-[200px]"
            />
            <div className="hidden md:inline-flex flex-col gap-4">
              <Image
                src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80
                "
                width={200}
                height={0}
                alt="/"
                className="rounded-md transition hover:scale-105 duration-300 ease-in  h-full md:w-[180px]"
              />
              <Image
                src="https://images.unsplash.com/photo-1615917124838-1af8a2aaae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                width={100}
                height={0}
                alt="/"
                className="rounded-md transition hover:scale-105 duration-300 ease-in h-full md:w-[180px]"
              />
            </div>
            <Image
              src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1290&q=80"
              width={100}
              height={0}
              alt="/"
              className="rounded-md transition hover:scale-105 duration-300 ease-in h-full w-[100px] sm:w-[150px] md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
