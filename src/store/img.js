
import {createSlice} from '@reduxjs/toolkit';


const imgSlice=createSlice({
    name:'imgUrl',
    initialState:{
        url: '',
        content: '',
        times:[]
    },
    reducers:{
        set: (state, actions) => {
            state.url = actions.payload.url
            state.content = actions.payload.content
            if (actions.payload.times) { 
                state.times=actions.payload.times
            }
            
        },
    },

})

export const {set}=imgSlice.actions


export default imgSlice.reducer