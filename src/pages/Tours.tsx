import { CouplesEscapes } from "@/components/sections/tours/Couple";
import { GroupTravel } from "@/components/sections/tours/Group";
import { ToursHero } from "@/components/sections/tours/Hero";
import { RegionalHub } from "@/components/sections/tours/Hub";

export const Tours = () => {
  return (
    <div className="flex flex-col">
      <ToursHero />
      <RegionalHub />
      <CouplesEscapes />
      <GroupTravel />
    </div>
  );
};
