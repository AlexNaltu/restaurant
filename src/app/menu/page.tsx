import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Container from "@/components/Container";
import { Menus } from "../../../sanity/lib/interfacemenu";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

async function getData() {
  const query = `*[_type == "menu"] {
    _id,
    title,
    images,
    slug,
    overview
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Special() {
  const data = (await getData()) as Menus[];
  return (
    <Container>
      <div className="my-20 flex flex-col gap-8 p-5">
        {data.map((menu) => (
          <div
            key={menu._id}
            className="border-b-4 border-orange-300 w-2/3 sm:w-4/6 md:w-10/12 lg:w-8/12 xl:w-9/12"
          >
            <div>
              <div className="flex flex-col md:flex-row mb-12 lg:mb-20 w-fit">
                <Image
                  src={urlForImage(menu.images[0]).url()}
                  alt="/"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
                <div className="flex flex-col gap-5 py-5 md:px-5 text-white">
                  <h1 className="font-bold text-lg sm:text-xl lg:text-3xl">{menu.title}</h1>
                  <p className="font-sm text-xs sm:text-sm xl:text-lg">{menu.overview}</p>
                  <Link
                    className={`${lobster.className} bg-zinc-500 w-fit text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-sm transition hover:bg-zinc-800 duration-300 ease-in`}
                    href={`/menuproduct/${menu.slug.current}`}
                    prefetch
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
