"use client";
import Spotlight from "@/components/collection-spotlight";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.style.background = isDarkTheme ? "#f7f7f8" : "#292b32";
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <main className="mt-12 mx-20">
        <Navbar />
        <Hero />
        <Spotlight />
      </main>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
