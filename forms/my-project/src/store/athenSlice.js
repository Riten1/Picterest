import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
}

const authenSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true,
      state.userData = action.payload.userData
    },

    logout: (state) => {
      state.status = false,
      state.userData = null;
    }
  }
}
)

export const {login, logout} = authenSlice.actions

export default authenSlice.reducer