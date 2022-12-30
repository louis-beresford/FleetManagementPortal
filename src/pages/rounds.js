import React, { useState, useEffect } from "react";
import RoundsTable from "../components/rounds/roundsTable";
import StopsTable from "../components/rounds/stopsTable";
import StopsMap from "../components/rounds/stopsMap";

function Rounds() {
  const [roundInfo, setRoundInfo] = useState();
  const [stopInfo, setStopInfo] = useState();
  const [currentStop, setCurrentStop] = useState(1);

  const getRounds = async () => {
    try {
      const response = await fetch(proccess.env.FLEET_API + "/getRounds", {
        method: "GET",
      }).then();
      const json = await response.json();
      setRoundInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getStop = async () => {
    try {
      const response = await fetch(
        proccess.env.FLEET_API + "/getStops?roundID=" + currentStop,
        {
          method: "GET",
        }
      ).then();
      const json = await response.json();
      setStopInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRounds();
    getStop();
  }, []);

  useEffect(() => {
    getStop();
  }, [currentStop]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "1280px",
        flex: 1,
      }}
    >
      <div
        style={{
          flex: 1,

          padding: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 3,
            padding: 10,
            marginBottom: -30,
            paddingTop: 18,
            marginLeft: 10,
          }}
        >
          <StopsMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBKHuCXHkf57iN31VnYQSxIf4iJQejk9sc&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            stopInfo={stopInfo}
            zoomLevel={12}
          />
        </div>
        <div style={{ height: 720, width: 1200 }}>
          {roundInfo && (
            <RoundsTable
              roundsInfo={roundInfo}
              setCurrentStop={setCurrentStop}
            />
          )}
        </div>
      </div>
      <div style={{ flex: 1, padding: 10 }}>
        <div style={{ paddingLeft: 20, marginBottom: -20 }}>
          <h3>Round number: {currentStop}</h3>
        </div>
        <div style={{ height: 700 }}>
          {stopInfo && <StopsTable stopsInfo={stopInfo} />}
        </div>
      </div>
    </div>
  );
}
export default Rounds;
