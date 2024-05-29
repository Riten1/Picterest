import { configureStore } from "@reduxjs/toolkit"
import authenSlice from '../store/athenSlice'

const store = configureStore({
    reducer: {
      authen: authenSlice,

    }
})

export default store