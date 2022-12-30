import { render, screen } from "@testing-library/react";
import ReportTable from "../../components/home/reportsTable";

test("renders learn react link", () => {
  render(<ReportTable />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
