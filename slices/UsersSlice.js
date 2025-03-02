import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers:(state,action) => {
        state.users = action.payload
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
  },
});

export const {setUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
