
import {createSlice} from '@reduxjs/toolkit';


const imgSlice=createSlice({
    name:'imgUrl',
    initialState:{
        url:''
    },
    reducers:{
        set:(state,actions)=>{
            state.url=actions.payload
        },
    },

})

export const {set}=imgSlice.actions


export default imgSlice.reducer