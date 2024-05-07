"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getDynamicEarthSunDistance } from "@/utils/earth-to-sun-distance";
export default function EarthToSun() {
  const [distanceToSun, setDistanceToSun] = useState(null);

  useEffect(() => {
    // Set the real-time Earth-Sun distance in kilometers
    setDistanceToSun(getDynamicEarthSunDistance());
  }, []);



  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row bg-teal-300 w-4/5 justify-between gap-6 p-4 rounded-lg">
        <Link href={"/"}>
          <div className="mx-6 cursor-pointer text-[#252525] font-semibold hover:bg-teal-100 rounded-xl p-1">
            Sea
          </div>
        </Link>
        <Link href={"/earth-to-sun"}>
          <div
            id="earth-to-sun"
            className="mx-6 cursor-pointer text-[#252525] font-semibold hover:bg-teal-100 rounded-xl p-1"
          >
            Sun
          </div>
        </Link>
      </div>
      <h1 className="mt-4">Distance from Earth to the Sun</h1>
      {distanceToSun && (
        <p id="sun-distance">
          The current approximate distance from Earth to the Sun is{" "}
          <span className="font-bold">{distanceToSun}</span> kilometers.
        </p>
      )}
    </div>
  );
}
