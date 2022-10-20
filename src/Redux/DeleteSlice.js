import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const DeleteAPi=createAsyncThunk('users/CreateUser',async()=>{
    let res=await axios(
        {
            method: 'delete',
            url: 'https://api.adstarks.com/public/api/country_partners/68987665-e28e-4cee-8918-2cd130b06261',
            headers: { 
              'Accept': 'application/json', 
              'Authorization': 'Bearer 1|knujpAgz6Qsmc00IxyzXk1ZUV6PKQUOajSaLpSem'
            }
          }
    )
    return res.data
})
export const DeleteSlice=createSlice({
    name:'delete',
    initialState:{
        allUsers:[],
        loading:false,
        error:true
    },
    extraReducers:{
        [DeleteAPi.pending]:(state)=>{
            state.loading=true
        },
        [DeleteAPi.fulfilled]:(state,{payload})=>{
            state.loading=false
        },
        [DeleteAPi.rejected]:(state)=>{
            state.error=true
        }
    }
})
export default DeleteSlice.reducer;