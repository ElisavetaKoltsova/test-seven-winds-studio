import { createSlice } from "@reduxjs/toolkit";
import { TreeRowProcess } from "../../../types/state";
import { NameSpace } from "../../../consts";
import { deleteTreeRowAction, fetchTreeRowsAction, postTreeRowAction } from "../api-actions";

const initialState: TreeRowProcess = {
  treeRows: [],
  isTreeRowsDataLoading: false
};

export const treeRowData = createSlice({
  name: NameSpace.TreeRows,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTreeRowsAction.pending, (state) => {
        state.isTreeRowsDataLoading = true;
      })
      .addCase(fetchTreeRowsAction.fulfilled, (state, action) => {
        state.isTreeRowsDataLoading = false;
        state.treeRows = action.payload;
      })
      .addCase(fetchTreeRowsAction.rejected, (state) => {
        state.isTreeRowsDataLoading = false;
      })
      .addCase(postTreeRowAction.fulfilled, (state, action) => {
        state.isTreeRowsDataLoading = false;
        state.treeRows = action.payload;
      })
      .addCase(deleteTreeRowAction.fulfilled, (state, action) => {
        state.isTreeRowsDataLoading = false;
        state.treeRows = action.payload;
      });
  }
});