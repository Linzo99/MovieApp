import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './reducers/favorites'


export default configureStore({
    reducer:{
        favorites : favoriteReducer
    }
})