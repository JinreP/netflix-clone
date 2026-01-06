import { FaceBook, Instagram, Twitter, Youtube } from "../icons/Icons";

export function Footer() {
  return (
    <div className="bg-black w-full h-95 flex items-center justify-center flex-col pr-10 pt-5">
      <Socials />
      <div className="flex items-center justify-center gap-15 text-gray-500">
        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Audio Description</p>{" "}
          <p className="hover:underline cursor-pointer">Investor Relations</p>
          <p className="hover:underline cursor-pointer">Legal Notices</p>
        </div>
        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Help Center</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Cooking Prefences</p>
        </div>

        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Gift Cards</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Cooking Prefences</p>
        </div>
        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Gift Cards</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">
            Cooperate information
          </p>
        </div>
        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Media Center</p>
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Contact us</p>
        </div>
      </div>

      <p className="text-gray-500 pr-180 mt-5 hover:underline cursor-pointer">
        © 1997-2026 Netflix, inc.
      </p>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex gap-3 pr-200  mb-7">
      <FaceBook />
      <Instagram />
      <Twitter />
      <Youtube />
    </div>
  );
}
