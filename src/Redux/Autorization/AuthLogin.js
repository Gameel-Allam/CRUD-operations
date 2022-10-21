import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthLogout } from './Logout';

export const getAccessToken=createAsyncThunk('/login',async(data)=>{
    console.log(data,"consol")
    let response=await axios.post('https://api.adstarks.com/public/api/login',data,{headers:{'Accept':'application/json'},withCredentials:false})
    return response.data
})

export const getAuthorzied=createSlice({
    name:'Autho',
    initialState:{
        accessToken:`Bearer ${localStorage.getItem('userToken')??''}`,
        loading:false,
        error:false,
        validUser:localStorage.getItem('validUserToken')??true
    },
    extraReducers:{
        [getAccessToken.pending]:(state)=>{
            state.loading=true
        },
        [getAccessToken.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.validUser=true
            localStorage.setItem('validUserToken',true)
            localStorage.setItem('userToken',payload.token)
        },
        [getAccessToken.rejected]:(state)=>{
            state.error=true
        },
        [AuthLogout.pending]:(state)=>{
            state.loading=true
        },
        [AuthLogout.fulfilled]:(state)=>{
            state.loading=false;
            state.validUser=false
            localStorage.removeItem('validUserToken')
            localStorage.removeItem('userToken')
            console.log("watcher logout")
        },
        [AuthLogout.rejected]:(state)=>{
            state.error=true
        },
    },
    reducers:{
        setInvalidUser:(state)=>{
            state.validUser=false
        }
    }
})
export const {setInvalidUser}=getAuthorzied.actions;
export default getAuthorzied.reducer;