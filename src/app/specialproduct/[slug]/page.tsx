import { get } from "http";
import { client } from "../../../../sanity/lib/client";
import { Specials } from "../../../../sanity/lib/interfacespecial";
import { Menus } from "../../../../sanity/lib/interfacemenu";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { GiAlarmClock } from "react-icons/gi";

async function getData(slug: string) {
  const query = `*[_type == "special" && slug.current == "${slug}"][0] {
      slug,
      images,
      title,
      prep
      
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const data = (await getData(params.slug)) as Specials;

  return (
    <div className="my-10 flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl text-orange-300 font-bold my-5">Today Special</h1>
      <div className="max-w-[400px] bg-zinc-500 py-5 px-5 rounded-sm">
        <Image
          src={urlForImage(data.images[0]).url()}
          alt="/"
          width={400}
          height={200}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-2 my-5 text-white">
          <h1 className="text-xl text-orange-300 font-black">{data.title}</h1>
          <div className="flex gap-1 items-center">
            <GiAlarmClock size={20} />
            {data.prep}
          </div>
        </div>
      </div>
    </div>
  );
}
