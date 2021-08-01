import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name:'favorites',
    initialState:[],
    reducers:{
        toggle: (state, { payload }) => {
            let index = state.findIndex( item => item.id === payload.id)
            if(index === -1 )
                state.push(payload)
            else
                state.splice(index, 1)
        }
    }
})

export const { toggle } = favoriteSlice.actions
export default favoriteSlice.reducer