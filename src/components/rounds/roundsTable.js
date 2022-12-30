import React from "react";
import Button from "@mui/material/Button";
import * as moment from "moment";
import Table from "../table.js";

const RoundsTable = (props) => {
  const roundStatusColorMap = {
    Active: "green",
    Incomplete: "black",
    Completed: "grey",
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Rounds",
        columns: [
          {
            Header: "Round Name",
            accessor: "roundName",
          },
          {
            Header: "Status",
            accessor: "description",
            Cell: (props) => {
              return (
                <p style={{ color: roundStatusColorMap[props.value] }}>
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Date",
            accessor: (d) => {
              console.log(d.RoundDate);
              const date = moment(d.RoundDate, "YYYY-MM-DD").format();
              const newdate = date.split("T")[0];
              console.log(newdate);
              return newdate;
            },
          },
          {
            Header: "Rider",
            accessor: "fullname",
          },
          {
            Header: "Bike",
            accessor: "bikeName",
          },
          {
            Header: "Current Stop No.",
            accessor: "activeStop",
          },
          {
            Header: "No. Stops",
            accessor: "numOfStops",
          },
          {
            Header: "Select Round",
            accessor: "Button",
            Cell: ({ row: { index } }) => (
              <Button id="test" onClick={() => props.setCurrentStop(index + 1)}>
                View Round
              </Button>
            ),
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => props.roundsInfo, []);
  return <Table columns={columns} data={data} pageSizeNo={4} />;
};

export default RoundsTable;
