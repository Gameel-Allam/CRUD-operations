import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import { AddAPi } from './AddSlice';
// import { DeleteAPi } from './DeleteSlice';
// import { UpdataAPi } from './UpdateSlice';
export const GetAPi=createAsyncThunk('/user',async()=>{
    let res=await axios(
        {
            method: 'get',
            url: 'http://localhost:8080/user',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }      
        }    
     
     
        )
        console.log(res);
    return res.data
})
export const GetSlice=createSlice({
    name:'getData',
    initialState:{
        allUsers:[],
        loading:false,
        error:true
    },
    extraReducers:{
        [GetAPi.pending]:(state)=>{
            state.loading=true
        },
        [GetAPi.fulfilled]:(state,{payload})=>{
            state.loading=false
            state.allUsers=payload
        },
        [GetAPi.rejected]:(state)=>{
            state.error=true
            console.log(`error`)
        }
        // [AddAPi.pending]:(state)=>{
        //     state.loading=true
        // },
        // [AddAPi.fulfilled]:(state,{payload})=>{
        //     state.loading=false
        //     state.allUsers=payload
        // },
        // [AddAPi.rejected]:(state)=>{
        //     state.error=true
        // },
        // [DeleteAPi.pending]:(state)=>{
        //     state.loading=true
        // },
        // [DeleteAPi.fulfilled]:(state,{payload})=>{
        //     state.loading=false
        //     state.allUsers=payload
        // },
        // [DeleteAPi.rejected]:(state)=>{
        //     state.error=true
        // },
        // [UpdataAPi.pending]:(state)=>{
        //     state.loading=true
        // },
        // [UpdataAPi.fulfilled]:(state,{payload})=>{
        //     state.loading=false
        //     state.allUsers=payload
        // },
        // [UpdataAPi.rejected]:(state)=>{
        //     state.error=true
        // }
    }
})
export default GetSlice.reducer;
