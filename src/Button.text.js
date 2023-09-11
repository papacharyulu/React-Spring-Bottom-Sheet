import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Button component renders correctly", () => {
  const { getByText } = render(<Button label="Click me" />);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("Button click event works", () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Button label="Click me" onClick={handleClick} />
  );
  const buttonElement = getByTestId("custom-button");

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});