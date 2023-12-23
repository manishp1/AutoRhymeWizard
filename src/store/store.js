import {configureStore} from '@reduxjs/toolkit'
import HomeSlice from './HomeSlice'

export default configureStore({
    reducer:{
        home:HomeSlice
    }
})