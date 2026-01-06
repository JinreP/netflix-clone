import { HeroProps, MovieType } from "@/lib/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function NewOnNetflix({ movies }: HeroProps) {
  return (
    <div>
      <h1 className="text-white">New on Netflix</h1>

      <div>
        <Carousel>
          <CarouselContent>
            {Array.from(
              { length: Math.ceil(movies.length / 6) },
              (_, pageIndex) => (
                <CarouselItem key={pageIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {movies
                      .slice(pageIndex * 6, (pageIndex + 1) * 6)
                      .map((movie, i) => (
                        <div key={i} className="relative w-full h-[120px]">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export function OnlyOnNetflix({ movies }: HeroProps) {
  return (
    <div>
      <h1 className="text-white">New on Netflix</h1>

      <div>
        <Carousel>
          <CarouselContent>
            {Array.from(
              { length: Math.ceil(movies.length / 6) },
              (_, pageIndex) => (
                <CarouselItem key={pageIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {movies
                      .slice(pageIndex * 6, (pageIndex + 1) * 6)
                      .map((movie, i) => (
                        <div key={i} className="relative w-full h-[120px]">
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
