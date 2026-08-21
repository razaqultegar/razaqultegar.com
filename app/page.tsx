import Hero from "@/components/sections/Hero";
import UdahKelar from "@/components/sections/UdahKelar";
import SentraLink from "@/components/sections/SentraLink";
import Dots from "@/components/sections/Dots";
import Experience from "@/components/sections/Experience";
import OpenSource from "@/components/sections/OpenSource";
import Journal from "@/components/sections/Journal";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-145 px-5 py-6 sm:px-0 sm:py-15">
      <Hero />
      <UdahKelar />
      <SentraLink />
      <Dots />
      <Experience />
      <OpenSource />
      <Journal />
      <Gallery />
    </main>
  );
}
