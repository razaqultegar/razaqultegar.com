import Hero from "@/components/sections/Hero";
import UdahKelar from "@/components/sections/UdahKelar";
import Orderanku from "@/components/sections/Orderanku";
import Dots from "@/components/sections/Dots";
import Experience from "@/components/sections/Experience";
import OpenSource from "@/components/sections/OpenSource";
import Journal from "@/components/sections/Journal";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <UdahKelar />
      <Orderanku />
      <Dots />
      <Experience />
      <OpenSource />
      <Journal />
      <Gallery />
    </>
  );
}
