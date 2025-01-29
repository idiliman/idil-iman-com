import { geolocation } from "@vercel/functions";

export function GET(request: Request) {
  const { latitude, longitude, city } = geolocation(request);

  if (!latitude || !longitude) {
    return new Response("No location data", { status: 400 });
  }

  const KL_LAT = 3.140853;
  const KL_LON = 101.693207;

  const distance = haversine(Number(latitude), Number(longitude), KL_LAT, KL_LON);

  return new Response(JSON.stringify({ distance, city }));
}

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth's radius in kilometers

  // Convert latitude and longitude differences from degrees to radians
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  // Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate final distance in kilometers
  return R * c;
}
