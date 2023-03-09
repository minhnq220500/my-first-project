import { createSlice } from "@reduxjs/toolkit";

type Action = {
  type: string;
  payload: any;
};

const initialState = {
  menuState: true,
};

const dashboard = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    changeMenuState: (state: any, action: Action) => {
      state.menuState = action.payload;
    },
  },
});

const { reducer, actions } = dashboard;

export const { changeMenuState } = actions;
export const dashboardReucer = reducer;
