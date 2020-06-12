import store from "../store";
import * as Actions from ".";

describe("actions", () => {
  it("should add item", () => {
    store.dispatch(Actions.add("a"));
    expect(store.getState().state.list).toHaveLength(1);

    store.dispatch(Actions.add("b"));
    expect(store.getState().state.list).toHaveLength(2);
  });
  it("should remove item", () => {
    store.dispatch(Actions.remove(1));
    expect(store.getState().state.list).toHaveLength(1);

    store.dispatch(Actions.remove(0));
    expect(store.getState().state.list).toHaveLength(0);
  });
  it("should pick random item", () => {
    store.dispatch(Actions.add("a"));
    store.dispatch(Actions.add("b"));
    store.dispatch(Actions.add("c"));
    store.dispatch(Actions.add("d"));
    store.dispatch(Actions.add("e"));

    store.dispatch(Actions.pick());
    const pick1 = store.getState().state.random;
    store.dispatch(Actions.pick());
    const pick2 = store.getState().state.random;

    expect(pick2).not.toBe(pick1);
    store.dispatch(Actions.pick());
    const pick3 = store.getState().state.random;
    expect(pick3).not.toBe(pick2);
  });
});
