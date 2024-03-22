import Spotlight from "@/components/collection-spotlight";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
      <main className="mt-12 mx-20">
        <Navbar />
        <Hero />
        <Spotlight />
      </main>
  );
}
