import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { sortObject } from "../../utils";
import { getTasks } from "./actions";

interface InitialState {
  tasks: Task[] | [];
  project: string | undefined;
  period: string | undefined;
  minDate: number | undefined;
  dates: number[] | [];
  title: string;
}

const initialState: InitialState = {
  tasks: [],
  project: undefined,
  period: undefined,
  minDate: undefined,
  dates: [],
  title: "",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getDates: (state) => {
      let daysArray: number[] = [];
      const start = new Date(new Date(state.minDate!).setDate(1));
      const startItarableDate = new Date(new Date(state.minDate!).setDate(1));
      const end = new Date(startItarableDate.setDate(start.getDate() + 60));
      if (start) {
        while (start <= end) {
          daysArray.push(Number(start));
          start.setDate(start.getDate() + 1);
        }
      }
      state.dates = daysArray;
    },
    showRow: (
      state,
      action: PayloadAction<{ level: number | undefined; pressed: boolean }>
    ) => {
      const { level, pressed } = action.payload;
      state.tasks.forEach((elem) => {
        return elem.nestingLevel! > level! ? (elem.isShow = pressed) : null;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      const { chart } = action.payload;
      state.tasks = sortObject(chart);
      const minDate = chart.period_start;
      state.minDate = new Date(minDate).setDate(1);
      state.title = `${action.payload.project} / ${action.payload.period}`;
    });
  },
});

export const { getDates, showRow } = tasksSlice.actions;

export default tasksSlice.reducer;
