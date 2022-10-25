import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import { AddAPi } from './AddSlice';
// import { DeleteAPi } from './DeleteSlice';
// import { UpdataAPi } from './UpdateSlice';
export const GetAPi=createAsyncThunk('users/CreateUser',async()=>{
    let res=await axios(
        {
            method: 'get',
            url: 'http://localhost:8080/user',
            // headers: { 
            //   'Accept': 'application/json', 
            // //   'Authorization': 'Bearer 200|9t1dGcLeRhiaD15Hkh0UGEEefXKKsFVDccMdX82t', 
            //   'Content-Type': 'text/plain'
            // }
          }
    )
    return res.data
})
export const GetSlice=createSlice({
    name:'getData',
    initialState:{
        allUsers:[{ id: 1, uname: "Ahmed", email: "ali@gmail.com", phone: "01222333444", age: 20 },
        { id: 2, uname: "Omar", email: "omar@gmail.com", phone: "01222333445", age: 21 },
        { id: 3, uname: "Mohamed", email: "mohamed@gmail.com", phone: "01222333446", age: 22 },
        { id: 4, uname: "Kaream", email: "kareem@gmail.com", phone: "01222333447", age: 23 }],
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
