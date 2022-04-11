import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Grid,
  Button,
  Avatar,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress
} from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
//
import TradingHistory from "../../components/nft/tradingHistory/Index";
import Offer from "../../components/nft/offers/Index";
//
import { Dialog, DialogContent, TextField } from "@mui/material";

import { useParams } from "react-router-dom";
import { useGetAllItemByMintQuery } from '../../app/api/BaseApi'


const Index = () => {
  const { id } = useParams();
  const [fetchedNft, setFetchedNft] = React.useState("")
  const { data, isError, isLoading, isSuccess } = useGetAllItemByMintQuery(id);
  console.log(data)
  React.useEffect(() => {
    if (isSuccess) {
      let selectedData
      (() => {
        data.data.map(item => {
          if (item.mint_address === id) {
            selectedData = item
            let NewData = JSON.parse(selectedData.item)
            setFetchedNft(NewData)
            console.log(fetchedNft)
          }
        })
      })()
    }
  }, [isSuccess])

  return (
    <>
      {isError && (<Alert severity="error">Something went wrong please try after some time</Alert>)}
      {isLoading && (<CircularProgress />)}
      <Grid
        sx={{ margin: { md: "120px auto 50px auto", xs: "60px auto" } }}
        container
        maxWidth="lg"
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignContent="flex-start"
        wrap="wrap"
      >
        <Grid item xl="5" md="5" xs="12" padding="10px">
          <img src={fetchedNft.image || ""} alt="" style={{ width: '100%', borderRadius: '22px' }} />
          <br />
          <br />
          <DetailTab />
        </Grid>
        <Grid item xl="7" md="7" xs="12" padding="10px">
          <Button
            variant="contained"
            sx={{
              color: "#666666",
              background: "#fff",
              borderRadius: "50px", marginBottom: '12px',
              "&:hover": { color: "#666666", background: "#fff" },
            }}
            size="small"
          >
            <Avatar
              src={fetchedNft.image || ""}
              sx={{ marginRight: "5px" }}
            />
            <b>Collection</b>
          </Button>
          {/* internal grid */}
          <Grid container alignItems="flex-end" justifyContent="space-between">
            <Grid item xl="4" md="4" xs="6">
              <Typography variant="h3">
                {/* NFT 00 */}
                {fetchedNft.name || ""}
              </Typography>
              <Typography variant="subtitle2" color="#666666" fontWeight="normal"  >
                Current Price
              </Typography>
              <Typography variant="h4">
                ◎ 23.5
              </Typography>
            </Grid>
            <Grid item xl="4" md="4" xs="6">
              <Buy />
            </Grid>
            <Grid item xl="4" md="4" xs="12" sx={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  fontWeight: "normal",
                  color: "#666666",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Owner by{" "}
                <span style={{ color: "#977855" }}>
                  <b>9Lve...76DQ</b>
                </span>
              </Typography>
              <br />
              <OfferBtn />
            </Grid>
          </Grid>
          {/* internal grid end */}
          <Box
            mt="50px"
            display="flex"
            flexWrap="wrap"
            gap="10px"
            justifyContent="space-between"
          >
            {new Array(8).fill("").map(() => (
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                  background: "#F2F2F2",
                  borderRadius: "28px",
                  width: { md: "41%", xs: "30%" },
                  padding: "10px 30px",
                }}
              >
                <div>
                  <Typography variant="subtitle2" color="#666666" fontWeight="normal"  >
                    Attribute
                  </Typography>
                  <Typography variant="subtitle1" color="initial" fontWeight="600" >
                    Variant
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle2" color="#666666" fontWeight="normal"  >
                    00.0%
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
          <br />
          <br />
          <Offer />
        </Grid>
      </Grid>

      <Container maxWidth="lg" sx={{ margin: "50px auto" }}>
        <Divider />
        <br />
        <br />
        <TradingHistory />
      </Container>
    </>
  );
}

export default Index;

const Buy = () => {
  const [openBuy, setOpenBuy] = React.useState(false);

  const handleClickOpenBuy = () => {
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setOpenBuy(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpenBuy}
        size="large"
        variant="contained"
        color="primary"
        sx={{ borderRadius: "50px", width: "100%" }}
      >
        Buy
      </Button>
      <Dialog
        PaperProps={{
          style: { borderRadius: "28px" },
        }}
        open={openBuy}
        onClose={handleCloseBuy}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#666666",
            }}
          >
            Purchase
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "32px" }}
          >
            NFT Name
          </Typography>
          <br />
          <Typography
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#666666",
            }}
          >
            For
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "32px" }}
          >
            ◎ 23.5
          </Typography>
          <br />
          <Box display="flex" justifyContent="space-between" gap="20px">
            <Button
              onClick={handleCloseBuy}
              size="small"
              variant="contained"
              sx={{
                padding: { md: "10px 50px", xs: "10px 20px" },
                color: "#666666",
                background: "#fff",
                borderRadius: "50px",
                "&:hover": { color: "#666666", background: "#fff" },
              }}
            >
              <b>Cancel</b>
            </Button>
            <Button
              onClick={handleCloseBuy}
              size="small"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                padding: { md: "10px 50px", xs: "10px 20px" },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

const OfferBtn = () => {
  const [openOffer, setOpenOffer] = React.useState(false);

  const handleClickOpenOffer = () => {
    setOpenOffer(true);
  };

  const handleCloseOffer = () => {
    setOpenOffer(false);
  };
  // cancel offer
  const [openOfferCancel, setOpenOfferCancel] = React.useState(false);

  const handleClickOpenOfferCancel = () => {
    setOpenOfferCancel(true);
  };

  const handleCloseOfferCancel = () => {
    setOpenOfferCancel(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpenOffer}
        size="large"
        variant="contained"
        sx={{
          width: "100%",
          color: "#666666",
          background: "#fff",
          borderRadius: "50px",
          "&:hover": { color: "#666666", background: "#fff" },
        }}
      >
        <b>Make offer</b>
      </Button>
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
          <Box
            display="flex"
            justifyContent="space-between"
            gap="20px"
            alignItems="center"
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              Offer Price
            </Typography>
            <TextField
              size="small"
              type="text"
              sx={{
                width: "78%",
                borderRadius: `16px`,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `16px`,
                  },
                },
              }}
            />
          </Box>
          <br />
          <Box display="flex" gap="20px" alignItems="center">
            <Typography
              gutterBottom
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#666666",
              }}
            >
              Offer Expiration
            </Typography>
            {/* <Box display="flex"   gap="18px"> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                7 days
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="7 days"
                size="small"
                sx={{
                  borderRadius: `16px`,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: `16px`,
                    },
                  },
                }}
              >
                <MenuItem value="Price">Price</MenuItem>
                <MenuItem value="Trends">Trends</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                14:00
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="14:00"
                size="small"
                sx={{
                  borderRadius: `16px`,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: `16px`,
                    },
                  },
                }}
              >
                <Box>
                  <MenuItem value="Price">Price</MenuItem>
                  <MenuItem value="Trends">Trends</MenuItem>
                </Box>
              </Select>
            </FormControl>
            {/* </Box> */}
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
              onClick={handleClickOpenOfferCancel}
              size="small"
              variant="contained"
              sx={{
                padding: { md: "10px 50px", xs: "10px 20px" },
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
                padding: { md: "10px 50px", xs: "10px 20px" },
              }}
            >
              Send Offer
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      {/* cancel offer */}
      <Dialog
        maxWidth="md"
        PaperProps={{
          style: { borderRadius: "28px" },
        }}
        open={openOfferCancel}
        onClose={handleCloseOfferCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#666666",
            }}
          >
            Are you sure you want to cancel the offer of
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "32px" }}
          >
            24.43
          </Typography>
          <br />
          <Typography
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#666666",
            }}
          >
            For
          </Typography>
          <br />
          <Box display="flex" gap="20px" justifyContent="space-between">
            <Button
              onClick={handleCloseOfferCancel}
              size="small"
              variant="contained"
              sx={{
                padding: { md: "10px 50px", xs: "10px 20px" },
                color: "#666666",
                background: "#fff",
                borderRadius: "50px",
                "&:hover": { color: "#666666", background: "#fff" },
              }}
            >
              <b>Cancel</b>
            </Button>
            <Button
              onClick={handleCloseOfferCancel}
              size="small"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "50px",
                padding: { md: "10px 50px", xs: "10px 20px" },
              }}
            >
              Cancel Offer
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
const DetailTab = () => {
  const Tab = styled(TabUnstyled)`
    font-family: Montserrat;
    color: #666666;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    background-color: transparent;
    width: 250px;
    padding: 13px 20px;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    &.${tabUnstyledClasses.selected} {
      background-color: #000;
      color: #fff;
    }
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    background: #fff;
    padding: 20px 0;
  `;

  const TabsList = styled(TabsListUnstyled)`
    width: 90%;
    border-radius: 50px;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: space-between;
  `;
  return (
    <>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>About</Tab>
          <Tab>Account Details</Tab>
        </TabsList>
        <br />
        <TabPanel value={0}>
          <Box>
            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#666666",
              }}
            >
              The MekaVerse is a collection of 8,888 generative Mekas. In the
              distant future, drivers fight in a world divided into 4 Factions.
              Originals Meka, Mirage, F9, and Gadians are the Titans who rule
              this planet. Which Faction are you going to join?
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={1}>
          <Box>
            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#666666",
              }}
            >
              Update Authority
            </Typography>
            <Typography
              sx={{
                overflow: "auto",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#977855",
              }}
            >
              AmivaqHeZBgUZkzEZ44Mi9zQJruExZMP4PVRYduFVkaS
            </Typography>
            <br />
            <Typography
              sx={{
                overflow: "auto",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#666666",
              }}
            >
              Token Address
            </Typography>
            <Typography
              sx={{
                overflow: "auto",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#977855",
              }}
            >
              AmivaqHeZBgUZkzEZ44Mi9zQJruExZMP4PVRYduFVkaS
            </Typography>
          </Box>
        </TabPanel>
      </TabsUnstyled>
    </>
  );
};
