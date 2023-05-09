import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import todoReducer from './todoSlice'
export default configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})
