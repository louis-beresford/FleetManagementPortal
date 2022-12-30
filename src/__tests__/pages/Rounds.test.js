import { render, screen } from "@testing-library/react";
import Admin from "../../pages/home";
import Rounds from "../../pages/rounds";

test("renders learn react link", () => {
  render(<Rounds />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
