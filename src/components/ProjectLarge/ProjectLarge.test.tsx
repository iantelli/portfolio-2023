import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import ProjectLarge from ".";

describe("ProjectLarge", () => {
  const props = {
    title: "Discord Bot",
    description: "A Discord bot that does stuff",
    image: "InterviewPal.webp",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  };
  it("renders ProjectLarge component", () => {
    const component = render(<ProjectLarge title={props.title} description={props.description} image={props.image} technologies={props.technologies}/>);
    expect(component).toMatchSnapshot();
  });
});
