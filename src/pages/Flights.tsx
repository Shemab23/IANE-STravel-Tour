import { FlightBrief } from "@/components/sections/flights/Brief";
import { FlightContact } from "@/components/sections/flights/contract";
import { FlightDestinations } from "@/components/sections/flights/Destination";
import { FlightHero } from "@/components/sections/flights/Hero";
// import { FlightServices } from "@/components/sections/flights/Service";

export const Flights = () => {
  return (
    <div className="flex flex-col">
      <FlightHero />
      <FlightBrief />
      <FlightDestinations />
      <FlightContact />
    </div>
  );
};
