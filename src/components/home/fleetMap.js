/*global google*/

import React, { useState, useEffect, Text } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  TrafficLayer,
  InfoWindow,
} from "react-google-maps";

import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import { IoIosBicycle } from "react-icons/io";

const getIconColour = (bike) => {
  if (bike.fullname) {
    return "green";
  } else if (bike.status === "Unusable") {
    return "red";
  } else {
    return "grey";
  }
};

const FleetMap = withScriptjs(
  withGoogleMap((props) => {
    const [selectedBike, setSelectedBike] = useState(null);

    const hubCoords = {
      lat: 51.52928,
      lng: -0.077191,
    };

    useEffect(() => {
      const listener = (e) => {
        if (e.key === "Escape") {
          setSelectedBike(null);
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);

    return (
      <GoogleMap zoom={12} center={hubCoords}>
        {/* <TrafficLayer autoUpdate /> */}

        {props.fleetInfo?.map((bike) => (
          <MarkerWithLabel
            // draggable={true}
            key={bike.id}
            position={{
              lat: bike.latitude,
              lng: bike.longitude,
            }}
            opacity={0}
            title={bike.name}
            labelAnchor={new google.maps.Point(20, 20)}
            onClick={() => {
              setSelectedBike(bike);
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "2px solid black",
                backgroundColor: getIconColour(bike),
                borderRadius: "50%",
              }}
            >
              <IoIosBicycle
                style={{
                  margin: "9px",
                  width: "50%",
                  height: "50%",
                }}
              />
            </div>
          </MarkerWithLabel>
        ))}
        {selectedBike && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedBike(null);
            }}
            position={{
              lat: selectedBike.latitude,
              lng: selectedBike.longitude,
            }}
          >
            <div>
              <h3>{selectedBike.name}</h3>

              {selectedBike.fullname && (
                <>
                  <h4>Rider Info</h4>
                  <p>Rider: {selectedBike.fullname}</p>
                  <p>Round Name: {selectedBike.roundName}</p>
                  <p>Stops No: {selectedBike.activeStop}</p>
                </>
              )}

              <h4>Bike details</h4>
              <p>Bike Condition: {selectedBike.status}</p>
              <p>Battery level: {selectedBike.attributes.batteryLevel}%</p>
              <p>Speed: {selectedBike.speed} mph</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  })
);

export default FleetMap;
