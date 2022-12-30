import { render, screen } from "@testing-library/react";
import UserEditForm from "../../components/admin/userEditForm";

test("renders learn react link", () => {
  render(<UserEditForm />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
