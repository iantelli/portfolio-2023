import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Break from ".";

// This component only renders when in mobile view
describe("Break", () => {
  it("renders Break component", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
    const component = render(<Break />);
    expect(component).toMatchSnapshot();
  });
});
