import * as React from "react";
import DisplayItem from "../display-item";

type Props = {
  list: string[];
  remove: (index: number) => object;
};

const ItemList: React.FC<Props> = ({ list, remove }) => (
  <section className="itemList">
    {list.map((name, index) => (
      <DisplayItem {...{ name, onClick: () => remove(index) }} key={index} />
    ))}
  </section>
);

export default ItemList;
