
import {createSlice} from '@reduxjs/toolkit';


const textSlice=createSlice({
    name:'count',
    initialState:{
        count:0
    },
    reducers:{
        add:(state)=>{
            state.count+=1
        },
        low:(state)=>{
            state.count-=1
        }
    },

})

export const {add,low}=textSlice.actions


export default textSlice.reducer