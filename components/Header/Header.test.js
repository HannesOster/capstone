import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders a header", () => {
  render(<Header />);
  const header = screen.getByRole("header");
  expect(header).toBeInTheDocument();
});
