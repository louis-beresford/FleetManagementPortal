import { render, screen } from "@testing-library/react";
import BikeTable from "../../components/home/bikeInfoTable";

test("renders learn react link", () => {
  render(<BikeTable />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
