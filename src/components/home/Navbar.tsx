import Link from "next/link";
import {
  Bell,
  EditProfile,
  Logo,
  SearchIcon,
  Transfer,
  User,
} from "../icons/Icons";
import { Separator } from "../ui/separator";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
export function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 p   pt-5">
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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full h-62.5 text-white border-0 bg-black pt-6 pr-6">
            <DropdownMenuLabel className="flex items-center gap-3">
              <Image
                src={"/kids.webp"}
                alt="netflix kid logo"
                width={35}
                height={50}
              />{" "}
              Kids
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-3">
              <EditProfile />
              Manage Profiles
            </DropdownMenuItem>
            <DropdownMenuItem className=" flex items-center gap-3">
              <Transfer /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <User /> Account
            </DropdownMenuItem>
            <Separator className="my-2 bg-white/20" />
            <DropdownMenuItem className="justify-center text-sm">
              Sign out of Netflix
            </DropdownMenuItem>{" "}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
