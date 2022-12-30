import { render, screen } from "@testing-library/react";
import UserAddForm from "../../components/admin/userAddForm";

test("renders learn react link", () => {
  render(<UserAddForm />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
