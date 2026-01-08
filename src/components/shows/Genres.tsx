import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Genres({
  setSelectedGenre,
}: {
  setSelectedGenre: (genre: string) => void;
}) {
  const genres = [
    "Action & Adventure",
    "Anime",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Romance",
    "Thriller",
    "Sports",
    "Teen",
    "Documentaries",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-black/50 text-white mb-8 ml-3 border-white/50 hover:bg-black/70 hover:text-red-500"
        >
          Genres
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 text-white flex flex-wrap w-100 border-white/20">
        {genres.map((genre) => (
          <DropdownMenuItem
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className="hover:bg-white/10 cursor-pointer"
          >
            {genre}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
