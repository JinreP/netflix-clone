"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { HeroProps, MovieType } from "@/lib/types";
import Image from "next/image";
import { Button } from "../ui/button";

import { InfoIcon, PlayIcon } from "lucide-react";

export function Hero({ movies }: HeroProps) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-white">Loading movies...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem key={movie.id} className="relative w-full h-[600px]">
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
                    <p className="text-white/90 font-semibold text-lg">
                      #{index + 1} in Movies Today
                    </p>
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
