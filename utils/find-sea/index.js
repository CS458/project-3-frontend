import { seas } from "../sea-loc";
import { calculateDistance } from "../calculate-sea";

export function findNearestSea(currentLat, currentLng) {
  let nearestSea = null;
  let minDistance = Infinity;

  seas.forEach((sea) => {
    const distance = calculateDistance(
      currentLat,
      currentLng,
      sea.lat,
      sea.lng,
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestSea = { name: sea.name, distance: distance.toFixed(2) };
    }
  });

  return nearestSea;
}
