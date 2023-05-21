import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Navbar from ".";

describe("Navbar", () => {
  it("renders Navbar component", () => {
    const component = render(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});
