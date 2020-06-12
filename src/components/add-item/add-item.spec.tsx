import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AddItem from ".";

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
  return <AddItem {...props} />;
};

describe("<AddItem />", () => {
  const props = {
    list: ["a", "b", "c"],
    add: jest.fn(),
  };
  it("should match the snapshot", async () => {
    act(() => {
      render(withProps(props), container);
    });
    expect(container).toMatchSnapshot();
    expect(container.querySelector("button").disabled).toBeTruthy();
  });
});
