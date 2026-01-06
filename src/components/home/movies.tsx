"use client";
import { HeroProps, MovieType } from "@/lib/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Button } from "../ui/button";
export function NewOnNetflix({ movies }: HeroProps) {
  const [show, setShow] = useState(0);
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">New on Netflix</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function OnlyOnNetflix({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Only on Netflix</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function JapaneseTvShow({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Japanese Tv Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function WesternTvShows({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Western Tv Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function UsTvSeries({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">US TV Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function WeThinkYouWouldLiveThis({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">
        We Think You Would Love This{" "}
      </h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function TvDramas({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Tv Dramas </h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function WesternDramas({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Western Tv Dramas</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function RousingTvShows({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Rousing Tv Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function ImagivativeTvShows({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Imaginitive Tv Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function WannaFeelLikeWorkout({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">
        Wanna Feel Like it's All Work Out
      </h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function PoliticalShows({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Political TV Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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

export function ViolentShows({ movies }: HeroProps) {
  const [show, setShow] = useState(0);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Violent TV Shows</h1>

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
                        <div key={i} className="relative w-full h-30">
                          <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title || "Movie backdrop"}
                            fill
                            className="object-cover"
                          />
                        </div>
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
