import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { treeRowData } from "./tree-row-data/tree-row-data";

export const rootReducer = combineReducers({
  [NameSpace.TreeRows]: treeRowData.reducer
});