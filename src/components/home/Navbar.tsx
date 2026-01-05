import Link from "next/link";
import { Bell, Logo, SearchIcon } from "../icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 p   t-5">
      <div className="flex gap-10">
        <Logo />
        <Link href={"/"}>Home</Link>
        <Link href={"/shows"}>Shows</Link>
        <Link href={"/movies"}>Movies</Link>
        <Link href={"/games"}>Games</Link>
        <Link href={"/latest"}>Latest</Link>
        <Link href={"/mylist"}>My List</Link>
        <Link href={"/browse"}>Browse by Lanquages</Link>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon />
        <h3>Kids</h3>
        <Bell />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
