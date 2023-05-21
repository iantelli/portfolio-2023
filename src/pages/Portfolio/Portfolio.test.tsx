import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Portfolio from ".";

describe("Portfolio", () => {
  it("renders Portfolio component", () => {
    const component = render(<Portfolio />);
    expect(component).toMatchSnapshot();
  });
});
