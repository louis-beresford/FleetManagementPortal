import React from "react";
import Button from "@mui/material/Button";
import * as moment from "moment";
import Table from "../table.js";

const ReportTable = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Fault Reports",
        columns: [
          {
            Header: "Bike name",
            accessor: "bikeName",
          },
          {
            Header: "Rider name",
            accessor: "fullname",
          },
          {
            Header: "Area",
            accessor: "faultDesc",
          },
          {
            Header: "Cause",
            accessor: "causeDesc",
          },

          {
            Header: "Additonal Comment",
            accessor: "comment",
          },
          {
            Header: "Date",
            accessor: (d) => {
              const date = moment(d.time, "YYYY-MM-DD").format();
              const newdate = date.split("T")[0];
              return newdate;
            },
          },
          {
            Header: "Status",
            accessor: "fixed",
            Cell: (props) => {
              if (props.value == 1) {
                return <p style={{ color: "green" }}>Fixed</p>;
              } else {
                return <p style={{ color: "red" }}>Not Fixed</p>;
              }
            },
          },
          {
            Header: "Fixed?",
            accessor: "Button",
            Cell: (row) => (
              <Button
                id="test"
                onClick={() => {
                  window.confirm("confirm issue has been resolved");
                }}
              >
                Confirm
              </Button>
            ),
          },
        ],
      },
    ],
    [props.reportInfo]
  );

  const data = props.reportInfo;
  return <Table columns={columns} data={data} pageSizeNo={6} />;
};

export default ReportTable;
