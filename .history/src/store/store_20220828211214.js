import {configureStore} from '@reduxjs/toolkit';
import countReducer from './count'
import modalReducer from './modal';
import alertModalReducer from './alertModal';


export const store=configureStore({
    reducer:{
        count:countReducer,
        modal:modalReducer,
        alertModal:alertModalReducer
    },
    
})
