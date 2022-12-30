import React from "react";

import Table from "../table.js";

const BikeTable = (props) => {
  const bikeStatusColorMap = {
    Good: "green",
    Useable: "grey",
    Unusable: "red",
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Bikes",
        columns: [
          {
            Header: "Bike name",
            accessor: "name",
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: (props) => {
              return (
                <p style={{ color: bikeStatusColorMap[props.value] }}>
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Faults",
            accessor: "numOfFaults",
            Cell: (props) => {
              return (
                <p style={{ color: props.value == 0 ? "green" : "red" }}>
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Battery",
            accessor: "attributes.batteryLevel",
            Cell: (props) => {
              return (
                <p style={{ color: props.value > 20 ? "green" : "red" }}>
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Speed /mph",
            accessor: "speed",
          },
        ],
      },
      {
        Header: "Rider",
        columns: [
          {
            Header: "Rider Name",
            accessor: "fullname",
          },
          {
            Header: "Round Name",
            accessor: "roundName",
          },
          {
            Header: "Current Stop",
            accessor: "activeStop",
          },
          {
            Header: "Number of stops",
            accessor: "numOfStops",
          },
          {
            Header: "Phone number",
            accessor: "phoneNumber",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => props.fleetInfo, []);

  return <Table columns={columns} data={data} pageSizeNo={6} />;
};

export default BikeTable;
