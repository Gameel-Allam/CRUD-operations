import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchAbout=createAsyncThunk('/search',async(data)=>{
    let URL=`http://localhost:8080/user/searchby/${data}`;
    let allusers='http://localhost:8080/user';
    console.log(data,"data From redux search")
    let res=await axios({
        method:'get',
        url: `${data!==''?URL:allusers}`,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    console.log(res.data)
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