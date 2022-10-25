import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const DeleteAPi=createAsyncThunk('users/CreateUser',async(data)=>{
    console.log(data.id,"delete from redux")
    let res=await axios(
        {
            method: 'delete',
            url: `http://localhost:8080/user/${data.id}`,
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