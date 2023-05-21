import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import ThemeToggle from ".";

describe("ThemeToggle", () => {
  it("renders ThemeToggle component", () => {
    const component = render(<ThemeToggle />);
    expect(component).toMatchSnapshot();
  });
});
