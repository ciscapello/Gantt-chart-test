import { configureStore, combineReducers } from "@reduxjs/toolkit";

import tasksSlice from "./tasks/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
