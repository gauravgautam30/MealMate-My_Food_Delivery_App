import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us test cases", () => {
  it("About us should be in about component", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact Us");

    expect(heading).toBeInTheDocument();
  });

  it("Contact us should have info", () => {
    render(<Contact />);
    const info = screen.getByText(/info@example\.com/i);

    expect(info).toBeInTheDocument();
  });
});
