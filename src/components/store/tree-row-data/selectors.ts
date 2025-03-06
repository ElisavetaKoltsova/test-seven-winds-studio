import { NameSpace } from "../../../consts";
import { State } from "../../../types/state";

export const getTreeRows = (state: Pick<State, NameSpace.TreeRows>) =>
  state[NameSpace.TreeRows].treeRows;

export const getTreeRowsDataLoadingStatus = (state: Pick<State, NameSpace.TreeRows>) =>
  state[NameSpace.TreeRows].isTreeRowsDataLoading;
