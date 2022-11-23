import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Task } from "../../types";
import { AppDispatch } from "../store";
import { getDates } from "./tasksSlice";

type Response = {
  project: string;
  period: string;
  chart: Task;
};

export const getTasks = createAsyncThunk<
  Response,
  undefined,
  { rejectValue: string; dispatch: AppDispatch }
>("tasks/getTasks", async (_, { rejectWithValue, dispatch }) => {
  const res: AxiosResponse<Response> = await axios.get(
    "http://82.202.204.94/tmp/test.php"
  );
  if (!res.data) {
    return rejectWithValue("Error");
  }
  dispatch(getDates());
  return res.data;
});
