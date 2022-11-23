import { RootState } from "../store";

export const selectTitle = (state: RootState) => {
  return state.tasks.title;
};

export const selectDates = (state: RootState) => {
  return state.tasks.dates;
};

export const selectMinDate = (state: RootState) => {
  return state.tasks.minDate;
};

export const selectAllTasks = (state: RootState) => {
  return state.tasks.tasks;
};
