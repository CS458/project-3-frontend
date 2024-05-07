"use client";
import React, { useState, useEffect } from "react";
import Map from "@/component/map";
import getCurrentLocation from "@/utils/map-loc";
import { findNearestSea } from "@/utils/find-sea";
import Link from "next/link";
export default function Home() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [nearestSea, setNearestSea] = useState("");

  useEffect(() => {
    getCurrentLocation((location) => {
      setCurrentLocation(location);
      const nearest = findNearestSea(location.lat, location.lng);
      setNearestSea(nearest);
    });
  }, []);

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
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
      <h1 className="text-center font-bold">Your Location</h1>
      <Map center={currentLocation} />
      {nearestSea && (
        <h2 id="sea-distance" className="text-center w-4/5 mx-auto">
          The nearest sea to your location is the {nearestSea.name} at
          approximately {nearestSea.distance} kilometers away.
        </h2>
      )}
    </div>
  );
}
