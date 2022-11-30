import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const viewFn=createAsyncThunk('/userid',async(data)=>{
    console.log(data,'from view')
    let res=await axios({
        method:'Get',
        url:`http://localhost:8080/user/${data}`,
        data:data

    })
    return res.data
});
export const ViewSlice=createSlice({
    name:'view',
    initialState:{
        singleUser:[],
        loading:true,
        error:true
    },
    extraReducers:{
        [viewFn.pending]:(state)=>{
            state.loading=true
        },
        [viewFn.fulfilled]:(state,{payload})=>{
            console.log("pendign")
            state.loading=false;
            state.singleUser=payload;
        },
        [viewFn.rejected]:(state)=>{
            state.error=true;
        }
    }
})
export default ViewSlice.reducer;