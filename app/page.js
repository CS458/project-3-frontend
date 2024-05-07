"use client";
// pages/Home.js
import React, { useState, useEffect } from "react";
import Map from "@/component/map";
import getCurrentLocation from "@/utils/map-loc";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
 

  useEffect(() => {
    getCurrentLocation((location) => {
      setCurrentLocation(location);
    
    });
  }, []);

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full">
     
      <h1 className="text-center font-bold">Your Location</h1>
      <Map center={currentLocation} />
     
    </div>
  );
}
