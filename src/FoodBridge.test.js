import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Auth from "../Auth";
import Navbar from "../Navbar";
import DonateFood from "../DonateFood";

describe("FoodBridge Project Tests", () => {

  test("Home page renders title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/FoodBridge/i)
    ).toBeInTheDocument();
  });

  test("Home page renders Get Started button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Get Started/i)
    ).toBeInTheDocument();
  });

  test("Auth page renders Login", () => {
    render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Login/i)
    ).toBeInTheDocument();
  });

  test("Auth page renders Email field", () => {
    render(
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    );

    expect(
      screen.getByPlaceholderText(
        /Email Address/i
      )
    ).toBeInTheDocument();
  });

  test("Navbar renders FoodBridge logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/FoodBridge/i)
    ).toBeInTheDocument();
  });

  test("DonateFood page renders form", () => {
    render(
      <BrowserRouter>
        <DonateFood />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Donate Food/i)
    ).toBeInTheDocument();
  });

});