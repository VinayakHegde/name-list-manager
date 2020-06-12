import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DisplayItem from ".";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const withProps = (props) => {
  return <DisplayItem {...props} />;
};

describe("<DisplayItem />", () => {
  const props = {
    name: "Hello",
    onClick: jest.fn(),
    btnName: "Test",
  };
  it("should match the snapshot", async () => {
    act(() => {
      render(withProps(props), container);
    });
    expect(container).toMatchSnapshot();
  });
  it("should render elements", async () => {
    act(() => {
      render(withProps(props), container);
    });
    const name = container.querySelector(".displayItem__name");
    expect(name.innerText).toMatchSnapshot(props.name);
    const btnName = container.querySelector(".displayItem__name");
    expect(btnName.innerText).toMatchSnapshot(props.btnName);
  });
});
