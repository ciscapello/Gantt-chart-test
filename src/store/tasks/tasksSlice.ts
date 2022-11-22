import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { getTasks } from "./actions";

interface InitialState {
  tasks: Task | undefined;
  project: string | undefined;
  period: string | undefined;
  minDate: string | undefined;
}

const initialState: InitialState = {
  tasks: undefined,
  project: undefined,
  period: undefined,
  minDate: undefined,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      const { chart } = action.payload;
      state.tasks = chart;
      console.log(state.tasks);
      state.minDate = chart.period_start;
    });
  },
});

export default tasksSlice.reducer;
