import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import MapWorld from "../../mapsJson/MapWorld.json";

export default function MapVector() {
  return <VectorMap {...MapWorld} />;
}
