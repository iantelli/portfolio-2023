import { render } from "@testing-library/react";
import { RiDiscordFill } from "react-icons/ri";
import { expect, it } from "vitest";
import Icon from ".";

describe("Icon", () => {
  const props = {
    icon: <RiDiscordFill className="h-8 w-8 text-rosePineDawn-love dark:text-rosePine-foam" />,
    link: "https://discord.com/users/155481915036532736",
    aria: "link to iantelli discord",
  };
  it("renders Icon component", () => {
    const component = render(<Icon icon={props.icon} link={props.link} aria={props.aria}/>);
    expect(component).toMatchSnapshot();
  });
});
