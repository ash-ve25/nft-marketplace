import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slices/tokenSlice'
import nftReducer from './slices/nftSlice'
import { BaseApi } from "../api/BaseApi";
import filterReducer from './slices/filterSlice'

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        nft: nftReducer,
        filter: filterReducer,
        [BaseApi.reducerPath]: BaseApi.reducer,
    },
    middleware: (gDM) => gDM().concat(BaseApi.middleware),
})
