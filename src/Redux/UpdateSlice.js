import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// var data = JSON.stringify({
//     "country_partner 1": {
//       "name": "Jennifer Lopez",
//       "username": "Jen1234567",
//       "email": "Jenn1@gmail.com",
//       "password": "Jan156@ad",
//       "password_confirmation": "Jan156@ad",
//       "organization": "School of Science and Technology1",
//       "country_id": 240
//     },
//     "country_partner 2": {
//       "name": "Jennifer Lopez2",
//       "username": "Jen12345672",
//       "email": "Jenn2@gmail.com",
//       "password": "Jan156@ad",
//       "password_confirmation": "Jan156@ad",
//       "organization": "School of Science and Technology1",
//       "country_id": 240
//     }
//   });
export const UpdataAPi=createAsyncThunk('users/CreateUser',async(data)=>{
    let res=await axios(
        {
            method: 'put',
            url: 'https://api.adstarks.com/public/api/tasks/updateTaskContent/8b8aa43c-bcd0-4c7c-817b-7f7dcda7f44b',
            headers: { 
              'Accept': 'application/json', 
              'Authorization': 'Bearer 200|9t1dGcLeRhiaD15Hkh0UGEEefXKKsFVDccMdX82t', 
              'Content-Type': 'application/json'
            },
            data : data
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
