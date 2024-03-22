import Image from "next/image";
import { useTheme } from "@/app/page";



const Card = ({ data }: any) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {data.map((card: any) => (
          <div key={card.id} className={` p-2 shadow-2xl ${isDarkTheme ? "bg-[#3b3e47]": "bg-white"}`}>
            <div className="h-3/4 ">
              <Image
                src={card.img}
                width={600}
                height={600}
                className="h-full w-full object-cover"
                alt="Picture of the author"
              />
            </div>
            <h1 className={`my-5 shadow-2xl ${isDarkTheme ? "": "text-black font-bold"}`}>{card.title}</h1>
            <div className="text-sm p-2">
              <div className={isDarkTheme ?  "bg-[#292b32]" : "bg-[#f7f7f8]"}>
              <div className="grid grid-cols-2 gap-2 p-1">
                <div className={`flex flex-col ${isDarkTheme ? "": "text-black"}`}>
                  <h1>Total Event</h1>
                  <h1 className="font-bold">{card.total_event} Events</h1>
                </div>
                <div className={`flex flex-col ${isDarkTheme ? "": "text-black"}`}>
                  <h1>Sport</h1>
                  <h1 className="font-bold">{card.sports}</h1>
                </div>
              </div>

              </div>
            </div>
            
          </div>
        ))}
         <div className={`p-2 relative ${isDarkTheme ? "bg-[#3b3e47]": " border-2 border-black bg-white text-black"}`} >
          <div className="absolute bg-black py-1 px-4 right-2 text-white">Ad</div>
          <Image
            src="/assets/images/add.jpeg"
            width={400}
            height={400}
            className="object-cover"
            alt="Picture of the author"
          />
          <h1 className="text-lg pt-5 font-semibold text-center">Advertisement title</h1>
          <p className="p-1 px-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
       
      </div>
    </>
  );
};

export default Card;
