import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Task } from "../../types";

type Response = {
  project: string;
  period: string;
  chart: Task;
};

export const getTasks = createAsyncThunk<
  Response,
  undefined,
  { rejectValue: string }
>("products/getSubscribes", async (_, { rejectWithValue }) => {
  const res: AxiosResponse<Response> = await axios.get(
    "http://82.202.204.94/tmp/test.php"
  );
  if (!res.data) {
    return rejectWithValue("Error");
  }
  return res.data;
});
