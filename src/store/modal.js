
import {createSlice} from '@reduxjs/toolkit';


const textSlice=createSlice({
    name:'modal',
    initialState:{
        title:'',
        text:[],
        visible:false
    },
    reducers:{
        show:(state,actions)=>{
            console.log(actions)
            state.title=actions.payload.title
            state.text=actions.payload.text
            state.visible=true
        },
        hidden:(state)=>{
            state.visible=false
        }
    },

})

export const {show,hidden}=textSlice.actions


export default textSlice.reducer