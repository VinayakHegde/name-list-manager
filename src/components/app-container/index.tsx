import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNull } from "util";
import { Dispatch } from "redux";
import * as AppTypes from "AppTypes";
import { types } from "../../store/actions";
import DisplayItem from "../display-item";
import ItemList from "../item-list";
import AddItem from "../add-item";

const AppContainer: React.FC = () => {
  const dispatch: Dispatch<AppTypes.AppAction> = useDispatch();
  const { list, random } = useSelector(({ state }: AppTypes.AppState) => state);
  const add = (payload: string) => dispatch({ type: types.ADD, payload });
  const remove = (payload: number) => dispatch({ type: types.REMOVE, payload });
  const pick = () => dispatch({ type: types.PICK });
  const name = !isNull(random) ? list[random] : null;
  return (
    <>
      <AddItem {...{ add, list }} />
      {list.length > 0 && (
        <DisplayItem
          {...{ name, onClick: () => pick(), btnName: "Pick a Name" }}
        />
      )}
      <ItemList {...{ remove, list }} />
    </>
  );
};

export default AppContainer;
