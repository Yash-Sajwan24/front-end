'use client'
import { useContext } from "react";
import { useGlobalContext } from "@/app/Context/store";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-7">
          <div className={isDarkTheme ? "text-white" : "text-black"}>
          Sports
          </div>
        </h1>
        <button
          onClick={toggleTheme}
          className="text-xl font-bold mb-7 bg-blue-400 p-2 rounded-2xl"
        >
          {isDarkTheme ? "Light" : "Dark"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
