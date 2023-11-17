import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slice/useauth";

const rootReducer = combineReducers({
    user : authSlice
})

export default rootReducer;