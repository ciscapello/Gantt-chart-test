import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { getObjects } from "../../utils/mapObj";
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
      console.log(start);
      const end = new Date(startItarableDate.setDate(start.getDate() + 60));
      if (start) {
        while (start <= end) {
          daysArray.push(Number(start));
          start.setDate(start.getDate() + 1);
        }
      }
      state.dates = daysArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      const { chart } = action.payload;
      console.log(state.tasks);
      state.tasks = getObjects(chart);
      const minDate = chart.period_start;
      state.minDate = new Date(minDate).setDate(1);
      console.log(action.payload);
      state.title = `${action.payload.project} / ${action.payload.period}`;
    });
  },
});

export const { getDates } = tasksSlice.actions;

export default tasksSlice.reducer;
