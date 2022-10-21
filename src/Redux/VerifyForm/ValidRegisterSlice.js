import { createSlice } from "@reduxjs/toolkit";

const RegSlice=createSlice({
    name:'Reg',
    initialState:{
        validUser:false,
        validPassword:false,
        vaildEmail:false,
        vaildConfPassword:false
    },
    reducers:{
        setVaildRegUserName:(state,{payload})=>{
            state.validUser=payload
        },
        setVaildRegPassword:(state,{payload})=>{
            state.validPassword=payload
        },
        setVaildRegConfPassword:(state,{payload})=>{
            state.vaildConfPassword=payload
        },
        setVaildRegEmail:(state,{payload})=>{
            state.vaildEmail=payload
        }
    }
})
export const {setVaildRegUserName,setVaildRegPassword, setVaildRegEmail,setVaildRegConfPassword} = RegSlice.actions;
export default RegSlice.reducer;
