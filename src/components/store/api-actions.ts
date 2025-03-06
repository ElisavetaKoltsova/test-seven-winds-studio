import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../../types/state";
import { AxiosInstance } from "axios";
import { APIRoute } from "../../consts";
import { TreeRows } from "../../types/tree-rows";

export const APIAction = {
  CREATE_ENTITY: 'entity/create',
  FETCH_TREE_ROWS: 'row/list',
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

export const fetchTreeRowsAction = createAsyncThunk<TreeRows, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIAction.FETCH_TREE_ROWS,
  async(_arg, {extra: api}) => {
    const { data } = await api.get<TreeRows>(APIRoute.TreeRows);
    return data;
  }
);
