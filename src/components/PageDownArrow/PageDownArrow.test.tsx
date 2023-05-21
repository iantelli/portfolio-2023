import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import PageDownArrow from ".";

describe("PageDownArrow", () => {
  it("renders PageDownArrow component", () => {
    const component = render(<PageDownArrow />);
    expect(component).toMatchSnapshot();
  });
});
