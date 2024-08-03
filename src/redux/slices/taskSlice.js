import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], // Initial task list is an empty array
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // Reducer to update the task list
    updateTaskList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTaskList } = taskSlice.actions;

export default taskSlice.reducer;
