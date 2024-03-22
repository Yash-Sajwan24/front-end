import Card from "./card";
import { data } from "./content/hero-data";

const Hero = () => {
  return (

    <>
      <Card data={data} />
      <div className="flex justify-center">
      <button className="py-3 px-5 bg-[#2c9cf0] rounded-sm mt-10"> See More</button>
      </div>

    </>
  );
};

export default Hero;
