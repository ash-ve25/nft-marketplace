import axios from 'axios'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js"; import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig, } from "@nfteyez/sol-rayz";
//create a connection of devnet
const createConnection = () => {
    return new Connection(clusterApiUrl("devnet"));
};

//check solana on window. This is useful to fetch address of your wallet.
const getProvider = () => {
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            return provider;
        }
    }
};

const getAllNftData = async (address) => {
    try {
      const connect = createConnectionConfig(clusterApiUrl("devnet"));
      const nfts = await getParsedNftAccountsByOwner({
        publicAddress: address,
        connection: connect,
        serialization: true,
      });
      return nfts;
    } catch (error) {
      console.log(error);
    }
  };


export const FilterWalletNfts = async (address) => {

    try {
        let nftData = await getAllNftData(address);
        var data = Object.keys(nftData).map((key) => nftData[key]); let arr = [];
        let n = data.length;
        for (let i = 0; i < n; i++) {
            console.log(data[i].data.uri);
            let val = await axios.get(data[i].data.uri);
            arr.push(val);
        }
        return arr;
    } catch (error) {
        console.log(error);
    }

    // store.dispatch(setWalletNfts(newNfts))

}