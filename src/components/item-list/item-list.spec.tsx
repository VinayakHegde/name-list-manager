import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ItemList from ".";

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
  return <ItemList {...props} />;
};

describe("<DisplayItem />", () => {
  const props = {
    list: ["Hello", "word", "world"],
    remove: jest.fn(),
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
    const displayItem = container.querySelectorAll(".displayItem");
    expect(displayItem).toHaveLength(props.list.length);
  });
});
