import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchAbout=createAsyncThunk('/search',async(data)=>{
    console.log(data,"data From redux search")
    let res=axios({
        method:'post',
        url:'',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        data:data
    })
    return res.data
})
export const searchSlice=createSlice({
    name:'searchecd',
    initialState:{
        loading:false,
        error:false
    },
    extraReducers:{
        [searchAbout.pending]:(state)=>{
            state.loading=true;
        },
        [searchAbout.fulfilled]:(state,{payload})=>{
            state.loading=false;
        },
        [searchAbout.rejected]:(state)=>{
            state.loading=false;
            state.error=false;
        }
    }
})
export default searchSlice.reducer;