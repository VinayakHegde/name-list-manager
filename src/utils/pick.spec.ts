import pick from "./pick";

describe("Pick", () => {
  const props = {
    list: [],
    random: null,
  };

  it("should return null", () => {
    expect(pick(props)).toBeNull();
  });

  it("should return 0", () => {
    props.list = ["a"];
    props.random = pick(props);
    expect(props.random).toBe(0);
    expect(pick(props)).toBeNull();
  });

  it("should return alternative index", () => {
    props.list = ["a", "b"];
    props.random = 0;
    expect(pick(props)).toBe(1);

    props.random = 1;
    expect(pick(props)).toBe(0);
  });

  it("should not return same index twice in a row", () => {
    props.list = ["a", "b", "c", "d", "e"];
    const try1 = pick(props);
    expect(try1).not.toBeNull();

    const try2 = pick({ ...props, random: try1 });
    expect(try2).not.toBe(try1);

    const try3 = pick({ ...props, random: try2 });
    expect(try3).not.toBe(try2);
  });
});
