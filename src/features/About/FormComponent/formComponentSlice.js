import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  data: {},
  lastSendMeCopy: false,
};

export const postFormData = createAsyncThunk(
  "requestForm/post",
  async (rawData) => {
    const formData = new URLSearchParams();

    for (const key in rawData) {
      formData.append(key, rawData[key]);
    }

    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbzBkG3_68Fkaf1Br7tmdfDaraXF9-VxDtf648RJLdYJJUSPUZE/exec",
      formData,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    console.log(response.data);

    return response.data;
  }
);

export const formComponentSlice = createSlice({
  name: "formComponent",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postFormData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(postFormData.pending, (state, action) => {
      state.status = "pending";
      state.lastSendMeCopy = action.meta.arg.sendMeCopy;
      state.data = action.payload;
    });
    builder.addCase(postFormData.rejected, (state, action) => {
      state.status = "rejected";
      state.data = action.payload;
    });
  },
});

export const { setStatus } = formComponentSlice.actions;

export default formComponentSlice.reducer;
