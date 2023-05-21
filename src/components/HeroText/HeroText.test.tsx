import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import HeroText from ".";

describe("HeroText", () => {
  it("renders HeroText component", () => {
    const component = render(<HeroText />);
    expect(component).toMatchSnapshot();
  });
});
