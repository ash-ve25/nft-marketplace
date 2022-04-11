import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: []
    },
    reducers: {
        setFilter: (state, {payload}) => {
            if(!payload.checked && (state.filter.indexOf(payload.item)>=0)){
                state.filter = state.filter.filter(_item=>_item !== payload.item)
            }
            else{
                state.filter.push(payload.item)
            }
            
        },
    }
})

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;