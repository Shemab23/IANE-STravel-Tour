import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import { ROUTES } from "@/constants/routes";
import { Flights } from "@/pages/Flights";
import { Tours } from "@/pages/Tours";
// import { Assistance } from "@/pages/Assistance";
// import { LandingLayout } from "@/layouts/LandingLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route element={<LandingLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Route> */}

      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/tours" element={<Tours />} />
      </Route>
    </Route>,
  ),
);
