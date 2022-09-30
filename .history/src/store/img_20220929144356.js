
import {createSlice} from '@reduxjs/toolkit';


const imgSlice=createSlice({
    name:'imgUrl',
    initialState:{
        url: '',
        content:''
    },
    reducers:{
        set: (state, actions) => {
            state.url = actions.payload.url
            state.content=actions.payload.content
            
        },
    },

})

export const {set}=imgSlice.actions


export default imgSlice.reducer