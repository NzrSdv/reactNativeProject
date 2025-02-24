import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ id: -1, name: "admin" },{id:23,name:"nazar"}],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
