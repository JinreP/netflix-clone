import { AllMovies } from "@/components/home/movies";
import { MoviesHero } from "@/components/movies/MoviesHero";

export default function MoviesHomePage() {
  return (
    <div className="bg-black w-full min-h-screen">
      <MoviesHero />
      <AllMovies />
    </div>
  );
}
