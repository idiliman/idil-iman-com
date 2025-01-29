import { Suspense } from "react";

export const experimental_ppr = true;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-7xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Distance />
      </Suspense>
      {children}
    </article>
  );
}

async function Distance() {
  const ABSOLUTE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://idiliman.com/";

  let geo: { distance: string; city: string } | null = null;
  const response = await fetch(`${ABSOLUTE_URL}/api/geo`);
  if (response.ok) {
    geo = await response.json();
  }

  if (!geo) {
    return null;
  }

  return (
    <div>
      You are in {geo.city}, roughly {geo.distance} km from me
    </div>
  );
}
