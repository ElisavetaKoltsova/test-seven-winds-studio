import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../../types/state";
import { AxiosInstance } from "axios";
import { APIRoute } from "../../consts";
import { TreeRow, TreeRowChild } from "../../types/tree-rows";

export const APIAction = {
  CREATE_ENTITY: 'entity/create',
  FETCH_TREE_ROWS: 'row/list',
  POST_TREE_ROW: 'row/create',
  POST_CHILD_TREE_ROW: 'row/child/create',
  DELETE_TREE_ROW: 'row/delete',
  UPDATE_TREE_ROW: 'row/update'
};

export const createEntityAction = createAsyncThunk<{eID: number}, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.CREATE_ENTITY,
  async(_arg, {extra: api}) => {
    const { data } = await api.get<{eID: number}>(APIRoute.EntityCreate);
    return data;
  }
);

export const fetchTreeRowsAction = createAsyncThunk<TreeRow[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_TREE_ROWS,
  async(_arg, {extra: api}) => {
    const { data } = await api.get<TreeRow[]>(APIRoute.TreeRows);
    return data;
  }
);

export const postTreeRowAction = createAsyncThunk<TreeRow[], TreeRow, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.POST_TREE_ROW,
  async(treeRow, {extra: api}) => {
    await api.post(APIRoute.CreateTreeRow, treeRow);
    const { data } = await api.get<TreeRow[]>(APIRoute.TreeRows);
    return data;
  }
);

export const postChildTreeRowAction = createAsyncThunk<TreeRow[], TreeRowChild, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.POST_CHILD_TREE_ROW,
  async(treeRow, {extra: api}) => {
    await api.post(APIRoute.CreateTreeRow, treeRow);
    const { data } = await api.get<TreeRow[]>(APIRoute.TreeRows);
    return data;
  }
);

export const updateTreeRowAction = createAsyncThunk<TreeRow[], TreeRow, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.UPDATE_TREE_ROW,
  async(treeRow, {extra: api}) => {
    await api.post(`${APIRoute.Row}/${treeRow.id}${APIRoute.Update}`, treeRow);
    const { data } = await api.get<TreeRow[]>(APIRoute.TreeRows);
    return data;
  }
);

export const deleteTreeRowAction = createAsyncThunk<TreeRow[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.DELETE_TREE_ROW,
  async(id, {extra: api}) => {
    await api.delete(`${APIRoute.Row}/${id}${APIRoute.Delete}`);
    const { data } = await api.get<TreeRow[]>(APIRoute.TreeRows);
    return data;
  }
);