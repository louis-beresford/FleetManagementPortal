/*global google*/

import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const StopsMap = withScriptjs(
  withGoogleMap((props) => {
    const hubCoords = {
      lat: 51.52928,
      lng: -0.077191,
    };

    return (
      <GoogleMap zoom={12} center={hubCoords}>
        {props.stopInfo?.map((stop) => (
          <Marker
            key={stop.id}
            position={{
              lat: stop.latitude,
              lng: stop.longitude,
            }}
            label={stop.stopNo.toString()}
          />
        ))}
      </GoogleMap>
    );
  })
);

export default StopsMap;
