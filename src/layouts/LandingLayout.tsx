import { Outlet } from "react-router-dom";

export function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground ">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
