import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Avatar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  CircularProgress
} from "@mui/material";
import { clusterApiUrl } from "@solana/web3.js"
import { useDispatch, useSelector } from 'react-redux'

import {
  createConnectionConfig,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";
import { FilterWalletNfts } from "../../../app/api";
import { setWalletNfts } from "../../../app/redux/slices/nftSlice";


const Index = () => {
  // const nftData = useSelector(state => state.nft.nft)
  const [loading, setLoading] = React.useState(false);
  const [nftData, setNftData] = React.useState([]);
  const dispatch = useDispatch();

  const [openOffer, setOpenOffer] = React.useState(false);
  const handleClickOpenOffer = () => {
    setOpenOffer(true);
  };
  const handleCloseOffer = () => {
    setOpenOffer(false);
  };
  // nft data
  // const address = localStorage.getItem("walletAddress")
  const address = useSelector((state) => state.token.token)
  // console.log("token:", address)
  // 

  const getAllNftData = async () => {
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
  React.useEffect(() => {
    async function data() {
      const nfts = await FilterWalletNfts(address);
      console.log(nfts)
      setNftData(nfts)
      console.log('nftdata', nftData)
      setLoading(true);
    }
    data();
  }, []);

  return (
    <>
      <Toolbar sx={{ flexWrap: "wrap", gap: "20px" }}>
        <Typography
          sx={{
            flexGrow: "1",
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "28px",
          }}
        >
          <b>Unlisted</b>
        </Typography>
        <Box display="flex" gap="10px" alignItems="center">
          <span
            style={{
              marginBottom: "0",
              background: "#977855",
              backdropFilter: "blur(10px)",
              color: "#fff",
              borderRadius: "100px",
              padding: "5px 15px",
            }}
          >
            <b>Listing</b>
          </span>
          <span
            style={{
              marginBottom: "0",
              background: "#977855",
              backdropFilter: "blur(10px)",
              color: "#fff",
              borderRadius: "100px",
              padding: "5px 15px",
            }}
          >
            <b>Offer</b>
          </span>
          <span
            style={{
              marginBottom: "0",
              background: "#977855",
              backdropFilter: "blur(10px)",
              color: "#fff",
              borderRadius: "100px",
              padding: "5px 15px",
            }}
          >
            <b>Sale</b>
          </span>
          <IconButton
            aria-label=""
            sx={{
              background: "#fff",
              color: "#000",
              border: "1px solid #E2E2E4",
              "&:hover": { background: "#fff" },
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <br />
      <>
        {/* {nftData &&
          nftData.length > 0 &&
          nftData.map((val, ind) => {
            return (
              <div key={ind} style={{ border: '1px solid #000', padding: '10px', margin: '5px' }}>
                <img src={val.data.image} alt="img" />
                <p  >{val.data.name}</p>
                <p  >{val.data.sellerFeeBasisPoints}</p>
                <p  >{val.data.symbol}</p>
              </div>
            );
          })} */}
      </>
      <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: "28px" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ border: "none" }}>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading ? (<Box sx={{textAlign:'center',margin:'50px'}}><CircularProgress /></Box>) : (<>
                {nftData && nftData.map((val, ind) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Button
                          onClick={handleClickOpenOffer}
                          variant="contained"
                          size="small"
                          color="primary"
                          sx={{ borderRadius: "50px" }}
                        >
                          List
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" gap="20px" alignItems="center">
                          <Avatar
                            alt="Remy Sharp"
                            src={val.data.image}
                          />
                          <Typography
                            sx={{
                              fontWeight: 800,
                              fontSize: "16px",
                              lineHeight: "24px",
                            }}
                          >
                            {val.data.name}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>)}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Dialog
        maxWidth="md"
        PaperProps={{
          style: { borderRadius: "28px" },
        }}
        open={openOffer}
        onClose={handleCloseOffer}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {/* <Box display="flex" justifyContent="space-between" gap="20px" alignItems="center">
                        <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                            Offer Price
                        </Typography>
                        <TextField
                            size="small"
                            type="text"
                            sx={{
                                width: '78%', borderRadius: `16px`,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderRadius: `16px`,
                                    },
                                }
                            }}
                        />
                    </Box>
                    <br />
                    <Box display="flex" gap="20px" alignItems="center">
                        <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                            Offer  Expiration
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" size="small">7 days</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="7 days"
                                size="small" sx={{
                                    borderRadius: `16px`,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderRadius: `16px`,
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="Price">Price</MenuItem>
                                <MenuItem value="Trends">Trends</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label" size="small">14:00</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="14:00"
                                size="small" sx={{
                                    borderRadius: `16px`,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderRadius: `16px`,
                                        },
                                    },
                                }}

                            >
                                <Box >
                                    <MenuItem value="Price">Price</MenuItem>
                                    <MenuItem value="Trends">Trends</MenuItem>
                                </Box>
                            </Select>
                        </FormControl>
                    </Box> */}
          <br />
          <Box
            display="flex"
            padding="10px 20px"
            sx={{ background: "#F2F2F2", borderRadius: "28px" }}
          >
            <Typography
              sx={{
                flexGrow: "1",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              Service Fee - 2%
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}
            >
              1.2 SOL
            </Typography>
          </Box>
          <br />
          <Box
            display="flex"
            padding="10px 20px"
            sx={{ background: "#F2F2F2", borderRadius: "28px" }}
          >
            <Typography
              sx={{
                flexGrow: "1",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              Service Fee - 2%
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}
            >
              1.2 SOL
            </Typography>
          </Box>
          <br />
          <Box
            display="flex"
            padding="10px 20px"
            sx={{ background: "#F2F2F2", borderRadius: "28px" }}
          >
            <Typography
              sx={{
                flexGrow: "1",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              Owner will recieve
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}
            >
              1.2 SOL
            </Typography>
          </Box>
          <br />
          <Box display="flex" gap="20px" justifyContent="space-between">
            <Button
              onClick={handleCloseOffer}
              size="small"
              variant="contained"
              sx={{
                padding: { md: "10px 50px", xs: "10px 30px" },
                color: "#666666",
                background: "#fff",
                borderRadius: "50px",
                "&:hover": { color: "#666666", background: "#fff" },
              }}
            >
              <b>Cancel</b>
            </Button>
            <Button
              onClick={handleCloseOffer}
              size="small"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                padding: { md: "10px 50px", xs: "10px 30px" },
              }}
            >
              List
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
