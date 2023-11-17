import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

const authSlice = createSlice({
    name  : "user",
    initialState : initialState,

    reducers : ({
        setUsser(state,value) {
            state.user = value.payload;
        },

        setToken(state,value){
            state.token = value.payload;
        }
    })
})

export const {setToken,setUsser}  = authSlice.actions;
export default authSlice.reducer;