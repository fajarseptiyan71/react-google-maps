import React, { useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";

import { dark, retro } from "../../const/MapsStyle";

const containerStyle = {
  width: "800px",
  height: "800px",
};

function MapsMarker({ isMarker, position }) {
  return isMarker ? <Marker position={position} /> : <></>;
}

export default function Maps() {
  const [searchBox, setSearchBox] = useState(null);
  const [coordinate, setCoordinate] = useState({
    lat: -6.914744,
    lng: 107.60981,
  });
  const [isMarker, setIsMarker] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD_pSnHtdNmXxS-MyDApjXTn2xEs87QunE",
    libraries: ["places"],
    language: "en",
  });

  const onPlacesChanged = () => {
    const location = searchBox.getPlaces()[0].geometry.location;
    setCoordinate({ lat: location.lat(), lng: location.lng() });
  };

  const onClickMap = (e) => {
    const location = e.latLng;
    setCoordinate({ lat: location.lat(), lng: location.lng() });
    setIsMarker(true);
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        options={{
          mapTypeControlOptions: { style: 2 },
          zoomControlOptions: { position: 7 },
          streetViewControlOptions: { position: 7 },
          styles: {},
        }}
        mapContainerStyle={containerStyle}
        center={coordinate}
        zoom={12}
        onClick={onClickMap}
      >
        <StandaloneSearchBox
          onPlacesChanged={onPlacesChanged}
          onLoad={(ref) => {
            setSearchBox(ref);
          }}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: "border-box",
              border: `1px solid transparent`,
              width: `270px`,
              height: `40px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              margin: "center",
              textOverflow: `ellipses`,
              position: "absolute",
              top: "40px",
              marginLeft: "50%",
            }}
          />
        </StandaloneSearchBox>
        <MapsMarker isMarker={isMarker} position={coordinate} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

// export default React.memo(Maps);
