import { SignUp } from "@clerk/nextjs";
import "./signUp.css";

export async function generateMetadata() {
  const idd = "Anime";

  return {
    title: `Watch ${idd} English Sub/Dub online free on Animoon.me , free Anime Streaming`,
    description: `Animoon is the best site to watch
                      ${idd} SUB online, or you can even
                      watch ${idd} DUB in HD quality. You
                      can also watch under rated anime
                      on Animoon website.`,
  };
}

export default function Page() {
  return (
    <>
      <div className="sgnup">
        <SignUp />
      </div>
    </>
  );
}
