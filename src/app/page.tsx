import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { getHeroSection } from "@/lib/Data/Data";

export default async function Home() {
  const heroMovies = await getHeroSection();
  console.log(heroMovies);

  return (
    <div className="bg-black w-full min-h-screen text-white">
      <Navbar />
      <Hero movies={heroMovies} />
    </div>
  );
}
