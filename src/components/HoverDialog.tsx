import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MovieType } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlayIcon, PlusIcon, ThumbsUpIcon, InfoIcon } from "lucide-react";

interface HoverDialogProps {
  movie: MovieType;
  children: React.ReactNode;
}

export function HoverDialogMovies({ movie, children }: HoverDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-black text-white border-gray-800 max-w-2xl">
        <div className="relative w-full h-64 mb-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-4 left-4 flex gap-2">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">
              <PlayIcon className="w-4 h-4 mr-1 fill-current" />
              Play
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-gray-800/80 border-gray-600 hover:bg-gray-700"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-gray-800/80 border-gray-600 hover:bg-gray-700"
            >
              <ThumbsUpIcon className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-gray-800/80 border-gray-600 hover:bg-gray-700"
            >
              <InfoIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{movie.title}</DialogTitle>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
            <span className="text-green-500 font-semibold">
              {Math.round(movie.vote_average * 10)}% Match
            </span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
          <DialogDescription className="text-gray-300 text-base leading-relaxed">
            {movie.overview}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
