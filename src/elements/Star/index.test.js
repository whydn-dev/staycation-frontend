import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("should have props [value, height, width, spacing] ", () => {
  const height = 40,
    width = 40,
    spacing = 4,
    value = 3.6;
  const { container } = render(
    <Star width={width} height={height} spacing={spacing} value={value} />
  );
  const starYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toBeInTheDocument(
    "style",
    expect.stringContaining(
      `height: ${height}px, width: ${width}px, margin-right: ${spacing}px`
    )
  );
  expect(container.querySelector(starYellow)).toBeInTheDocument();
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(starYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
