import { render, screen } from "@testing-library/react";
import BikeAdminTable from "../../components/admin/bikeAdminTable";
import Table from "../../components/table";

test("renders learn react link", () => {
  render(<BikeAdminTable />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
