import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTaskList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTaskList } = taskSlice.actions;

export default taskSlice.reducer;
