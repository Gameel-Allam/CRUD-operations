import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name:'login',
    initialState:{
        validPassword:false,
        vaildEmail:false
    },
    reducers:{
        setVaildLogPassword:(state,{payload})=>{
            state.validPassword=payload
        },
        setVaildLogEmail:(state,{payload})=>{
            state.vaildEmail=payload
        }
    }
})
export const {setVaildLogPassword, setVaildLogEmail} = LoginSlice.actions;
export default LoginSlice.reducer;
