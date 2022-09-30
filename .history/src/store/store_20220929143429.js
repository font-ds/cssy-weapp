import {configureStore} from '@reduxjs/toolkit';
import countReducer from './count'
import modalReducer from './modal';
import alertModalReducer from './alertModal';
import infoReducer from './info'
import imgReducer from './img'

export const store=configureStore({
    reducer:{
        count:countReducer,
        modal:modalReducer,
        alertModal:alertModalReducer,
        info: infoReducer,
        img:imgReducer
    },
    
})
