import {transform} from "next/dist/build/swc";
import Image from "next/image";

export default function Home() {
  const sampleMonumentData = [
    {
      name: "Statue of Liberty",
      image: {
        src: "https://picsum.photos/id/16/600/800",
        transform: "scale-110 -rotate-6",
      },
    },
    {
      name: "Eiffel Tower lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: {
        src: "https://picsum.photos/id/17/600/800",
        transform: "scale-75",
      },
    },
    {
      name: "Big Ben",
      image: {
        src: "https://picsum.photos/id/18/600/800",
      },
    },
    {
      name: "Taj Mahal",
      image: {
        src: "https://picsum.photos/id/19/600/800",
      },
    },
    {
      name: "Great Wall of China",
      image: {
        src: "https://picsum.photos/id/20/600/800",
        transform: "scale-75 -rotate-6 skew-y-6 translate-x-2 translate-y-12",
      },
    },
    {
      name: "Angkor Wat",
      image: {
        src: "https://picsum.photos/id/25/600/800",
      },
    },
  ];

  return (
    <main className="px-10 py-20 p4 max-w-6xl m-auto">
      <h1 className="">Sample Monuments Data</h1>
      <h2 className="my-12">Lorem ipsum dolor sit</h2>
      <div className="grid grid-cols-2 gap-4 my-20 md:grid-cols-3 md:gap-12 lg:my-32">
        {sampleMonumentData.map((monument) => (
          <div
            key={monument.name}
            className={`border-2 border-opacity-50 border-indigo-400 rounded-xl px-5 pt-2 pb-5 m-auto shadow-lg shadow-purple-300 backdrop-blur-sm bg-white/30 ${monument.image.transform} hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer`}
          >
            <div className="my-3 w-40 ">
              <h3 className="truncate text-ellipsis">{monument.name}</h3>
            </div>
            <Image
              className="rounded-lg"
              src={monument.image.src}
              alt={monument.name}
              width={400}
              height={600}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
