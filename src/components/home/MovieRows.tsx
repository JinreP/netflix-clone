"use client";

import { MovieRowProps } from "@/lib/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { HoverDialogMovies } from "@/components/HoverDialog";

export function MovieRow({ movies, title }: MovieRowProps) {
  const [show, setShow] = useState(0);
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">{title}</h1>

      <div>
        <Carousel>
          <CarouselContent>
            {Array.from(
              { length: Math.ceil(movies.length / 6) },
              (_, pageIndex) => (
                <CarouselItem key={pageIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {movies
                      .slice(pageIndex * 6, (pageIndex + 1) * 6)
                      .map((movie, i) => (
                        <HoverDialogMovies key={movie.id} movie={movie}>
                          <div className="relative w-full h-30 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-md overflow-hidden">
                            <Image
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                              alt={movie.title || "Movie backdrop"}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </HoverDialogMovies>
                      ))}
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          {show > 0 && (
            <div onClick={() => setShow(show - 1)}>
              <CarouselPrevious className="bg-black border-0"></CarouselPrevious>
            </div>
          )}
          <div onClick={() => setShow(show + 1)}>
            <CarouselNext className="absolute border-0 right-3 bg-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
