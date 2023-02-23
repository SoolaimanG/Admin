import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    condition: false,
    search: "",
  },
  reducers: {
    setCondition: (state) => {
      state.condition = !state.condition;
    },
    update: (state, action) => {
      state.search = action.payload.name;
    },
  },
});

export const { update } = userSlice.actions;
export const { setCondition } = userSlice.actions;
export default userSlice.reducer;
