import Body from "../Body";
import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import mockData from "../mocks/mockData.json";
import "@testing-library/jest-dom";

it("shoud have card with res name", () => {
  render(<RestaurentCard resData={mockData} />);
  const card = screen.getByText("Super taste Baker's");
  expect(card).toBeInTheDocument();
});
