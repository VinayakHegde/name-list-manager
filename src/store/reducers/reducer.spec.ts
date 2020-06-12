import { initialState, reducer } from ".";
import { types } from "../actions";

describe("reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, { type: types.PICK })).toEqual(initialState);
  });

  it("should add item to state", () => {
    expect(reducer(undefined, { type: types.ADD, payload: "a" })).toEqual({
      ...initialState,
      list: ["a"],
    });
  });

  it("should remove item to state", () => {
    expect(reducer(undefined, { type: types.REMOVE, payload: 0 })).toEqual({
      ...initialState,
      list: [],
    });
  });
});
