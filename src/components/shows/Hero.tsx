"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MovieType } from "@/lib/types";
import Image from "next/image";
import { Button } from "../ui/button";

import { InfoIcon, PlayIcon } from "lucide-react";
import { getHeroByShows } from "@/lib/Data/Data";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Genres } from "./Genres";

export function ShowHero() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [filteredShows, setFilteredShows] = useState<MovieType[]>([]);

  const [hero, setHero] = useState<MovieType[]>([]);

  const genreMap: Record<string, string> = {
    "Action & Adventure": "10759",
    Anime: "16",
    Comedy: "35",
    Crime: "80",
    Documentary: "99",
    Drama: "18",
    Family: "10751",
    Fantasy: "14",
    Horror: "27",
    Romance: "10749",
    "Sci-Fi": "878",
    Thriller: "53",
    Sports: "10770",
    Teen: "10751",
    Documentaries: "99",
  };
  const genreId = selectedGenre === "All" ? "" : genreMap[selectedGenre];

  useEffect(() => {
    async function loadHero() {
      const data = await getHeroByShows(genreId);
      setHero(data);
    }

    loadHero();
  }, [genreId]);

  return (
    <div className="relative w-full h-150">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {hero.map((movie, index) => (
            <CarouselItem key={movie.id} className="relative w-full h-150">
              <div className="absolute inset-0">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title || "Movie backdrop"}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <h1 className="text-4xl md:text-4xl pb-10 lg:text-4xl font-bold text-white leading-tight">
                        {selectedGenre}
                      </h1>
                      <Genres setSelectedGenre={setSelectedGenre} />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {movie.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-lg leading-relaxed">
                      {movie.overview}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Button className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold">
                        <PlayIcon className="mr-2 h-5 w-5 fill-current" />
                        Play
                      </Button>
                      <Button className="bg-gray-600/70 text-white hover:bg-gray-600/90 px-8 py-3 text-lg font-semibold">
                        <InfoIcon className="mr-2 h-5 w-5" />
                        More Info
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border-none" />
      </Carousel>
    </div>
  );
}
