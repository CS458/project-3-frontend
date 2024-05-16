"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "80vh",
  marginTop: "12px",
  marginRight: "auto",
  marginLeft: "auto",
};

function Map({ center }) {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
