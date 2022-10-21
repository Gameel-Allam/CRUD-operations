import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const AuthLogout=createAsyncThunk('/logout',async()=>{
    let res=await axios({
        method: 'post',
        url: 'https://api.adstarks.com/public/api/logout',
        headers: { 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
      })
    return res.data
})
export const LogoutSlice=createSlice({
    name:'logout',
    initialState:{
        loading:false,
        error:false,
        outuser:false
    },
   extraReducers:{
    [AuthLogout.pending]:(state)=>{
        state.loading=true
    },
    [AuthLogout.fulfilled]:(state,{payload})=>{
        state.loading=false
        state.outuser=true
        console.log(payload,"Logout")
    },
    [AuthLogout.rejected]:(state)=>{
        state.error=true
    }
   }
})
export default LogoutSlice.reducer;