
import {createSlice} from '@reduxjs/toolkit';


const textSlice=createSlice({
    name:'alertModal',
    initialState:{
        title:'',
        text:[],
        visible:false,
        longTime:false
    },
    reducers:{
        alertShow:(state,actions)=>{
            console.log(actions)
            state.title=actions.payload.title
            state.text=actions.payload.text
            state.visible=true
        },
        alertHidden:(state)=>{
            state.visible=false
            state.longTime=false
        },
        longTimeShow:(state,actions)=>{
            state.title=actions.payload.title
            state.text=actions.payload.text
            state.longTime=true
            state.visible=true
        }
    },

})

export const {alertShow,alertHidden,longTimeShow}=textSlice.actions


export default textSlice.reducer