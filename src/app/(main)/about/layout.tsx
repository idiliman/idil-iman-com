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
  const decodedCity = city ? decodeURIComponent(city) : null;

  const ABSOLUTE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://idiliman.com/";

  let distance: string | null = null;
  const response = await fetch(`${ABSOLUTE_URL}/api/geo`, {
    method: "POST",
    body: JSON.stringify({ visitorCity: decodedCity }),
  });
  if (response.ok) {
    distance = await response.json();
  }

  return (
    <div className="text-sm text-gray-500">
      You are in {decodedCity}, roughly {distance} km from me
    </div>
  );
}
