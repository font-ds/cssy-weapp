
import {createSlice} from '@reduxjs/toolkit';


const infoSlice=createSlice({
    name:'modal',
    initialState:{
        userInfo:{}
    },
    reducers:{
        setUserInfo:(state,action)=>{
            state.userInfo=action.payload.userInfo
        }
    },

})

export const {setUserInfo}=infoSlice.actions


export default infoSlice.reducer