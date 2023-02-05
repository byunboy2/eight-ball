import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders", () => {
    render(<App />);
  });
  it("contains default text", () => {
    const { container } = render(<App />);
    const containerText = container.textContent;
    expect(containerText).toContain("Think of a Question");
  });
});
