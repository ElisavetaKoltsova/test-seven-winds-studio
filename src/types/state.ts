import { store } from "../components/store";
import { TreeRow } from "./tree-rows";

export type TreeRowProcess = {
  treeRows: TreeRow[];
  isTreeRowsDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;