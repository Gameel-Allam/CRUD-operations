import { createSlice } from "@reduxjs/toolkit";

const ForgetSlice=createSlice({
    name:'Restore',
    initialState:{
        validPassword:false,
        vaildEmail:false
    },
    reducers:{
        setVaildNewPassword:(state,{payload})=>{
            state.validPassword=payload
        },
        setVaildForgetEmail:(state,{payload})=>{
            state.vaildEmail=payload
        }
    }
})
export const {setVaildNewPassword, setVaildForgetEmail} = ForgetSlice.actions;
export default ForgetSlice.reducer;
