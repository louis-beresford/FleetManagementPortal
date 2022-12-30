import React from "react";
import styled from "styled-components";

import Table from "../table.js";

const StopsTable = (props) => {
  const stopStatusColorMap = {
    Delivered: "green",
    Unsuccessful: "red",

    Rejected: "red",
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Stops",
        columns: [
          {
            Header: "Stop number",
            accessor: "stopNo",
          },
          {
            Header: "Client",
            accessor: "clientName",
          },
          {
            Header: "Contact number",
            accessor: "clientNumber",
          },
          {
            Header: "Address",
            accessor: "firstLine",
          },

          {
            Header: "Postcode",
            accessor: "postcode",
          },
          {
            Header: "Time Slot",
            accessor: "timeSlot",
          },
        ],
      },
      {
        Header: "Parcel",
        columns: [
          {
            Header: "Parcel ID",
            accessor: "parcelID",
          },
          {
            Header: "Status",
            accessor: "description",
            Cell: (props) => {
              return (
                <p style={{ color: stopStatusColorMap[props.value] }}>
                  {props.value}
                </p>
              );
            },
          },
          {
            Header: "Delivered Time",
            accessor: "deliveredTime",
          },
        ],
      },
    ],
    []
  );

  const data = props.stopsInfo;

  return <Table columns={columns} data={data} pageSizeNo={5} />;
};

export default StopsTable;
