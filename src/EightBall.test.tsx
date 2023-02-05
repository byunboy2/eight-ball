import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import EightBall from "./EightBall";
import _ from "underscore";

jest.mock("underscore", () => {
  return {
    sample: jest.fn(() => ({
      msg: "Yes",
      color: "green",
    })),
  };
});

describe("App component", () => {
  it("renders", () => {
    render(<EightBall />);
  });

  it("renders the default text and color", () => {
    const answer = { color: "black", msg: "Yes" };
    const { container } = render(<EightBall />);
    const eightBallElement = container.querySelector(".EightBall");
    expect(eightBallElement).toHaveStyle(`background-color: ${answer.color}`);
    expect(container.textContent).toContain("Think of a Question");
  });
  // better to search by something that is visible to the users such as label or text
  // searching by tag/class/id, which is not visible to user, goes against the react testing philosophy
  it("updates state when clicked on", () => {
    const mockSample = jest.spyOn(_, "sample").mockImplementation(() => {
      return { msg: "Yes.", color: "green" };
    });

    const { getByText } = render(<EightBall />);
    const initialAnswer = getByText("Think of a Question.");
    expect(initialAnswer).toBeInTheDocument();

    fireEvent.click(initialAnswer);

    const updatedAnswer = getByText("Yes.");
    expect(updatedAnswer).toBeInTheDocument();

    const parent = updatedAnswer.parentElement;
    expect(parent).toHaveAttribute("style", `background-color: green;`);

    mockSample.mockRestore();
  });
});
