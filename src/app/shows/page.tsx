import { AllMovies } from "@/components/home/movies";
import { ShowHero } from "@/components/shows/Hero";

export default function ShowsHomePage() {
  return (
    <div className="bg-black w-full min-h-screen">
      <ShowHero />
      <AllMovies />
    </div>
  );
}
