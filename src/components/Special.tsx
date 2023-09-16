import React from "react";
import Container from "./Container";
import { client } from "../../sanity/lib/client";
import { Specials } from "../../sanity/lib/interfacespecial";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

async function getData() {
  const query = `*[_type == "special"] {
    _id,
    slug,
    overview,
    images,
    title
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Special() {
  const data = (await getData()) as Specials[];
  return (
    <Container>
      <div className="my-20 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange-300 font-bold ">Today Special</h1>
          <p className="text-white font-extralight text-xs md:text-base lg:text-lg">these are today's special meals & desert</p>
        </div>
        <div>
          <ul className="flex flex-col items-center sm:flex-row justify-center gap-4">
            {data.map((special) => (
              <li
                key={special._id}
                className="w-[200px] bg-zinc-600 rounded-lg transition hover:scale-105 duration-300 ease-in"
              >
                <Link
                  href={`/specialproduct/${special.slug.current}`}
                  prefetch
                  className="space-y-3 xl:col-span-3"
                >
                  <Image
                    src={urlForImage(special.images[0]).url()}
                    alt="/"
                    width={200}
                    height={200}
                    className="rounded-t-lg"
                  />
                  <h1 className="text-white font-bold text-xs p-5">{special.title}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
