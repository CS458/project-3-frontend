"use client";
// pages/Home.js
import React, { useState, useEffect } from "react";
import Map from "@/component/map";
import getCurrentLocation from "@/utils/map-loc";
import { findNearestSea } from "@/utils/find-sea";

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
