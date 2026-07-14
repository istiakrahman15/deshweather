import type { BangladeshDivision } from "@/types";

export interface DistrictSeed {
  name: string;
  division: BangladeshDivision;
  latitude: number;
  longitude: number;
}

// Division capitals + key districts for fast local search without a network round trip.
// Full lookup still falls back to Nominatim for anything not listed here.
export const BANGLADESH_DISTRICTS: DistrictSeed[] = [
  { name: "Dhaka", division: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { name: "Gazipur", division: "Dhaka", latitude: 24.0023, longitude: 90.4264 },
  { name: "Narayanganj", division: "Dhaka", latitude: 23.6238, longitude: 90.5000 },
  { name: "Tangail", division: "Dhaka", latitude: 24.2513, longitude: 89.9167 },
  { name: "Faridpur", division: "Dhaka", latitude: 23.6070, longitude: 89.8429 },
  { name: "Chattogram", division: "Chattogram", latitude: 22.3569, longitude: 91.7832 },
  { name: "Cox's Bazar", division: "Chattogram", latitude: 21.4272, longitude: 92.0058 },
  { name: "Comilla", division: "Chattogram", latitude: 23.4607, longitude: 91.1809 },
  { name: "Noakhali", division: "Chattogram", latitude: 22.8696, longitude: 91.0995 },
  { name: "Rangamati", division: "Chattogram", latitude: 22.6533, longitude: 92.1747 },
  { name: "Khulna", division: "Khulna", latitude: 22.8456, longitude: 89.5403 },
  { name: "Jessore", division: "Khulna", latitude: 23.1697, longitude: 89.2137 },
  { name: "Satkhira", division: "Khulna", latitude: 22.7185, longitude: 89.0705 },
  { name: "Bagerhat", division: "Khulna", latitude: 22.6602, longitude: 89.7895 },
  { name: "Rajshahi", division: "Rajshahi", latitude: 24.3745, longitude: 88.6042 },
  { name: "Bogura", division: "Rajshahi", latitude: 24.8465, longitude: 89.3773 },
  { name: "Pabna", division: "Rajshahi", latitude: 24.0064, longitude: 89.2372 },
  { name: "Barishal", division: "Barishal", latitude: 22.7010, longitude: 90.3535 },
  { name: "Patuakhali", division: "Barishal", latitude: 22.3596, longitude: 90.3298 },
  { name: "Bhola", division: "Barishal", latitude: 22.6859, longitude: 90.6482 },
  { name: "Sylhet", division: "Sylhet", latitude: 24.8949, longitude: 91.8687 },
  { name: "Moulvibazar", division: "Sylhet", latitude: 24.4829, longitude: 91.7774 },
  { name: "Rangpur", division: "Rangpur", latitude: 25.7439, longitude: 89.2752 },
  { name: "Dinajpur", division: "Rangpur", latitude: 25.6279, longitude: 88.6332 },
  { name: "Mymensingh", division: "Mymensingh", latitude: 24.7471, longitude: 90.4203 },
  { name: "Jamalpur", division: "Mymensingh", latitude: 24.9375, longitude: 89.9372 },
];

export const DEFAULT_LOCATION: DistrictSeed = BANGLADESH_DISTRICTS[0]!;
