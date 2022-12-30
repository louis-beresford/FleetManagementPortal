import React from "react";
import Button from "@mui/material/Button";

import Table from "../table.js";

const RiderAdminTable = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Riders",
        columns: [
          {
            Header: "Username",
            accessor: "username",
          },
          {
            Header: "Rider name",
            accessor: "fullname",
          },
          {
            Header: "Privileges",
            accessor: "privilege",
          },
          {
            Header: "Phone number",
            accessor: "phoneNumber",
          },
          {
            Header: "Edit",
            accessor: "Button",
            Cell: ({ row: { index } }) => (
              <Button
                id="test"
                onClick={() => props.toggleUserEdit(data[index])}
              >
                Edit User
              </Button>
            ),
          },
        ],
      },
    ],
    [props.riderInfo]
  );

  const data = props.riderInfo;
  // console.log("dataaaa" + data);

  return <Table columns={columns} data={data} pageSizeNo={8} />;
};

export default RiderAdminTable;
