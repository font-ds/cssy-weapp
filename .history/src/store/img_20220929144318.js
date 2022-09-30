
import {createSlice} from '@reduxjs/toolkit';


const imgSlice=createSlice({
    name:'imgUrl',
    initialState:{
        url: '',
        content:''
    },
    reducers:{
        set:(state,actions)=>{
            state = actions.payload
        },
    },

})

export const {set}=imgSlice.actions


export default imgSlice.reducer