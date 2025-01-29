import { headers } from "next/headers";
import { Suspense } from "react";

export const experimental_ppr = true;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-7xl mx-auto p-6">
      <Suspense fallback={<div>Loading...</div>}>
        <Distance />
      </Suspense>
      {children}
    </article>
  );
}

async function Distance() {
  const headersList = await headers();
  const city = headersList.get("x-vercel-ip-city");

  // const ABSOLUTE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://idiliman.com/";

  // let geo: { distance: string; city: string } | null = null;
  // const response = await fetch(`${ABSOLUTE_URL}/api/geo`);
  // if (response.ok) {
  //   geo = await response.json();
  //   console.log("geo", geo);
  // }

  // if (!geo) {
  //   return null;
  // }

  return (
    <div className="text-sm text-gray-500">
      {/* You are in {geo.city}, roughly {geo.distance} km from me */}
      city: {city}
    </div>
  );
}
