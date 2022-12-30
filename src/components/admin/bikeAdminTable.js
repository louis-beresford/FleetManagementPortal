import React from "react";
import Button from "@mui/material/Button";

import Table from "../table.js";

const BikeAdminTable = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Bikes",
        columns: [
          {
            Header: "Bike name",
            accessor: "bikeName",
          },
          {
            Header: "Traccar Device ID",
            accessor: "traccarId",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Edit",
            accessor: "Button",
            Cell: ({ row: { index } }) => (
              <Button
                id="test"
                onClick={() => props.toggleBikeEdit(data[index])}
              >
                Edit Bike
              </Button>
            ),
          },
        ],
      },
    ],
    [props.fleetInfo]
  );

  const data = props.fleetInfo;

  return <Table columns={columns} data={data} pageSizeNo={8} />;
};

export default BikeAdminTable;
