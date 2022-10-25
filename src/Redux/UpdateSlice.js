import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const UpdataAPi=createAsyncThunk('users/CreateUser',async(data)=>{
    console.log(data.email,"from update redux")
    let res=await axios(
        {
            method: 'put',
            url: `http://localhost:8080/user/${data.id}`,
            headers: { 
              'Accept': 'application/json', 
              'Authorization': 'Bearer 200|9t1dGcLeRhiaD15Hkh0UGEEefXKKsFVDccMdX82t', 
              'Content-Type': 'application/json'
            },
            data : data.email
          }
    )
    return res.data
})
export const UpdataSlice=createSlice({
    name:'updata',
    initialState:{
        allUsers:[],
        loading:false,
        error:true
    },
    extraReducers:{
        [UpdataAPi.pending]:(state)=>{
            state.loading=true
        },
        [UpdataAPi.fulfilled]:(state,{payload})=>{
            state.loading=false
        },
        [UpdataAPi.rejected]:(state)=>{
            state.error=true
        }
    }
})
export default UpdataSlice.reducer;
