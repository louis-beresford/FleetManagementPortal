import { render, screen } from "@testing-library/react";
import FleetMap from "../../components/home/fleetMap";

test("loads fleet map", () => {
  render(<FleetMap />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
