import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { data } from "./content/spotlight-data";
import { useTheme } from "@/app/page";


const Spotlight = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <>
      <div className={`mt-8 py-10 mb-20 ${isDarkTheme ? "bg-gradient-to-b from-[#19282a] to-[#211b2b]" : "bg-white text-black" }`}>
        <h1 className="text-center text-4xl font-bold pt-12">
          Collection Spotlight
        </h1>
        <p className="px-32 text-center py-10">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>

        <div className="grid grid-cols-5 gap-5">
          <div className=" flex items-center justify-center ">
            <ArrowLeft height={50} width={50} color="blue"/>
          </div>
          {data.map((card) => (
            <div key={card.id}>
              <div key={card.id} className={` p-2 text-center shadow-2xl ${isDarkTheme ? "bg-[#3b3e47]" : "bg-white"}`}>
                <div className="h-3/4 ">
                  <Image
                    src={card.img}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    alt="Picture of the author"
                  />
                </div>
                - - - - - - - - - - - - - - - - 
                <h1 className="my-5 text-xl">{card.title}</h1>
                <p className={` mt-2 ${isDarkTheme ? "text-gray-300": "text-gray-600" }`}>{card.date}</p>
                <p className={` my-2 ${isDarkTheme ? "text-gray-300": "text-gray-600" }`}>{card.location}</p>
                <div className="bg-black mx-2">
                  <button className="text-white py-3">{card.btn}</button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <ArrowRight height={50} width={50} color="blue"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotlight;
