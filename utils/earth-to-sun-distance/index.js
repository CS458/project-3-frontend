// utils/earthSunDynamicDistance.js
import { HelioDistance } from "astronomy-engine";

export function getDynamicEarthSunDistance() {
  // Get the current date
  const now = new Date();

  // Calculate the distance between Earth and the Sun in AU
  const distanceAU = HelioDistance("Earth", now);

  // Convert AU to kilometers
  const AU_TO_KM = 149597870.7;
  const distanceKm = (distanceAU * AU_TO_KM).toFixed(2);

  return distanceKm;
}
