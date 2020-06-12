import * as React from "react";
import { Provider } from "react-redux";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import store from "../../store/store";

import AppContainer from ".";

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

const withProvider = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

describe("<AppContainer />", () => {
  it("should match the snapshot", async () => {
    act(() => {
      render(withProvider(), container);
    });
    expect(container).toMatchSnapshot();
  });
  it("should render form element", async () => {
    act(() => {
      render(withProvider(), container);
    });
    expect(container.getElementsByClassName("addItem")).toHaveLength(1);
  });
});
