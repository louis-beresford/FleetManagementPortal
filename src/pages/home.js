import FleetMap from "../components/home/fleetMap";
import React, { useState, useEffect } from "react";
import BikeTable from "../components/home/bikeInfoTable";
import ReportTable from "../components/home/reportsTable";
import { height } from "@mui/system";

function Home() {
  const [fleetInfo, setFleetInfo] = useState();
  const [reportInfo, setReportInfo] = useState();

  const getFleet = async () => {
    try {
      const response = await fetch(proccess.env.FLEET_API + "/bikes", {
        method: "GET",
      });
      const json = await response.json();
      setFleetInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getReports = async () => {
    try {
      const response = await fetch(proccess.env.FLEET_API + "/getFaults", {
        method: "GET",
      });
      const json = await response.json();
      setReportInfo(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFleet();
    getReports();
    // const interval = setInterval(() => {
    //   console.log("Logs every minute");
    //   getReports();
    // }, 30000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "1500px",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
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
          <FleetMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBKHuCXHkf57iN31VnYQSxIf4iJQejk9sc&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            fleetInfo={fleetInfo}
            zoomLevel={12}
          />
        </div>
        <div style={{ height: 720, width: 1200 }}>
          {reportInfo && <ReportTable reportInfo={reportInfo} />}
        </div>
      </div>
      <div style={{ padding: 10, paddingTop: 60, height: 470, flex: 1 }}>
        {fleetInfo && <BikeTable fleetInfo={fleetInfo} />}
      </div>
    </div>
  );
}
export default Home;
