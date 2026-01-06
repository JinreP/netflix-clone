import { FaceBook, Instagram, Twitter, Youtube } from "../icons/Icons";

export function Footer() {
  return (
    <div className="bg-black w-full h-125">
      <Socials />
      <div className="flex items-center justify-center ">
        <div className="">
          <p>Audio Descpription</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cooking Prefences</p>
        </div>

        <div>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Cooking Prefences</p>
        </div>
        <div>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Cooperate information</p>
        </div>
        <div>
          <p>Media Center</p>
          <p>Pricavy</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="flex gap-3">
      <FaceBook />
      <Instagram />
      <Twitter />
      <Youtube />
    </div>
  );
}
