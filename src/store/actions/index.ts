import { action } from "typesafe-actions";

export enum types {
  ADD = "ADD",
  REMOVE = "REMOVE",
  PICK = "PICK",
}

export const add = (item: string) => action(types.ADD, item);
export const remove = (index: number) => action(types.REMOVE, index);
export const pick = () => action(types.PICK);
