import React from "react";
import { render, queryByText } from "@testing-library/react";
import Controller from "./index";

test("should render children props", () => {
  const text = "Hello World";
  const { container } = render(<Controller> {text} </Controller>);

  expect(container.querySelector(".col-3")).toBeInTheDocument();
});
