import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getAllByRole("button");
  const buttons = screen.getAllByRole("button");
  const loginButton = buttons[0]; // Assuming the login button is the first one
  expect(loginButton).toBeInTheDocument();

  // assertion
  //   expect(loginButton).toBeInTheDocument();
});

it("should render login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - ( 0 items)");

  // assertion
  expect(cartItems).toBeInTheDocument();
});

it("shuold be an event of changing Login buttonn to Logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Log in" });

  fireEvent.click(logInButton);

  const LogOutButton = screen.getByRole("button", { name: "Log out" });

  expect(LogOutButton).toBeInTheDocument();
});
