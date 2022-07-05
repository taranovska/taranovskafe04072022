import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});

test("renders chart", () => {
  render(<App />);
  const chart = screen.getByTestId("chartComponent");
  expect(chart).toBeInTheDocument();
});
test("renders button", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("button cklicked", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button"));
});
