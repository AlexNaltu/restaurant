"use client";

import React from "react";
import { HoverCard } from "@radix-ui/themes";
import { FaLocationDot } from "react-icons/fa6";

function HoverCr() {
  return (
    <div id="contact">
      <HoverCard.Root>
        <HoverCard.Trigger>
          <h1 className="font-black cursor-pointer">Contact Us</h1>
        </HoverCard.Trigger>
        <HoverCard.Content size="2">
          <div className="bg-zinc-500 w-[300px] text-xs flex flex-col gap-2 px-4 py-5 rounded-lg text-white ">
            <div className="flex gap-2 items-center ">
              <FaLocationDot size={20} />
              <p>38073 Brusino TN, Italy</p>
            </div>
            <p>+1 505-644-2127</p>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}

export default HoverCr;
