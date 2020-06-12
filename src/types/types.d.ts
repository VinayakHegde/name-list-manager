declare module "AppTypes" {
  import { StateType, ActionType } from "typesafe-actions";
  export type AppState = StateType<typeof import("../store/reducers").default>;
  export type AppAction = ActionType<typeof import("../store/actions")>;
}
