import { HomeHero } from "@/components/sections/home/Hero";
import { HomeOtherServices } from "@/components/sections/home/otherServices";
import { HomePartners } from "@/components/sections/home/partners";
import { HomePitch } from "@/components/sections/home/Pitch";
import { HomeMainServices } from "@/components/sections/home/services";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomePitch />
      <HomeMainServices />
      <HomeOtherServices />
      <HomePartners />
    </div>
  );
}
