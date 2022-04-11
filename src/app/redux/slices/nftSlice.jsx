import { createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
    name: 'nft',
    initialState: {
        nft: []
    },
    reducers: {
        setWalletNfts: (state, action) => {
            state.nft = action.payload
        },
    }
})
export const { setWalletNfts } = nftSlice.actions;

export default nftSlice.reducer;