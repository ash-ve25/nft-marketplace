import React, { useEffect, } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Box,
  Drawer,
  useTheme,
  useMediaQuery, Autocomplete
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  useScrollTrigger,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useStyles } from "./Style";
import CloseIcon from "@mui/icons-material/Close";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection, } from "@solana/wallet-adapter-react";
import { useDispatch,  } from 'react-redux'
import { setToken } from "../../../app/redux/slices/tokenSlice";

const Header = () => {
  const classes = useStyles();
  const wallet = useWallet();
  const dispatch = useDispatch()
 
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(wallet)
    if (wallet?.publicKey) {
      // console.log(wallet.publicKey.toString());
      let user = {
        walletAddress: wallet.publicKey.toString(),
      };
      // console.log(user);
      dispatch(setToken(wallet.publicKey.toString()))
      // localStorage.setItem("walletAddress", wallet.publicKey.toString());
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [wallet.publicKey]);
  //geeting nft from wallet

  // console.log(nftData)
  // 
  // const connect = createConnectionConfig(clusterApiUrl("devnet"));
  // const nfts = getParsedNftAccountsByOwner({
  //   publicAddress: address,
  //   connection: connect,
  //   serialization: true,
  // });
  // console.log(nfts)
  // console.log(nfts)

  //drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1075));

  const [open, setOpen] = React.useState(false);
  const handleDrawer = (bool) => () => {
    setOpen(bool);
  };
  // wallet
  const [openWallet, setOpenWallet] = React.useState(false);

  const handleClickOpenWallet = () => {
    setOpenWallet(true);
  };

  const handleCloseWallet = () => {
    setOpenWallet(false);
  };
  //
  const trigger = useScrollTrigger();

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        sx={{ background: "#fff", boxShadow: "none" }}
        elevation={trigger ? 24 : 0}
        style={{
          backgroundColor: trigger ? "transparent" : "#fff",
          boxShadow: trigger
            ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
            : undefined,
        }}
      >
        <Toolbar className={classes.toolbar}>
          <NavLink to="/">
            <img src={require("../../../assets/Stateofone.svg").default} alt="logo" />
          </NavLink>
          {!isMobile && (
            // <TextField
            //   type="search"
            //   label="Search Collections"
            // sx={{
            //   width: "70%",
            //   background: "#F2F2F2",
            //   borderRadius: `16px`,
            //   "& .MuiOutlinedInput-root": {
            //     "& fieldset": {
            //       borderRadius: `16px`,
            //       borderColor: "#F2F2F2",
            //     },
            //   },
            // }}
            //   size="small"
            //   InputProps={{
            //     endAdornment: (
            //       <InputAdornment>
            //         <IconButton>
            //           <SearchIcon />
            //         </IconButton>
            //       </InputAdornment>
            //     ),
            //   }}
            // />
            <Autocomplete
              disablePortal
              id="disable-close-on-select"
              options={searchNFT}
              sx={{
                width: "70%",
                background: "#F2F2F2",
                borderRadius: `16px`,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: `16px`,
                    borderColor: "#F2F2F2",
                  },
                },
              }}

              size="small"
              renderInput={(params) => <TextField  {...params}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <SearchIcon sx={{ color: '#666666' }} />
                  ),
                }}
                label="Search NFT" />}
            />
          )}

          {!isMobile && (
            <a
              // to="/dashboard"
              style={{ textDecoration: "none", color: "unset" }}
            >
              {/* <Button
                color="primary"
                variant="contained"
                sx={{ borderRadius: "100px" }}
              >
                Connect Wallet
              </Button> */}
              <WalletMultiButton className={classes.multibtn} />
            </a>
          )}
          {isMobile && (
            <IconButton onClick={handleDrawer(true)}>
              <img
                src={require("../../../assets/Home/Vector.png").default}
                alt=""
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>


      <Drawer
        anchor="top"
        onClose={handleDrawer(false)}
        open={isMobile && open}
        PaperProps={{
          sx: {
            background: "rgba( 255, 255, 255, 0.35 )",
            backdropFilter: "blur( 1px )",
            WebkitBackdropFilter: "blur( 1px )",
            borderRadius: "0 0 50px 50px",
            height: "auto",
          },
        }}
      >
        <Box className={classes.sidedrawer}>
          <CloseIcon
            className={classes.closeIcon}
            onClick={handleDrawer(false)}
          />
          <br />
          <br />
          <Autocomplete
            disablePortal
            id="disable-close-on-select"
            options={searchNFT}
            sx={{
              width: "100%",
              background: "#F2F2F2",
              borderRadius: `16px`,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: `16px`,
                  borderColor: "#F2F2F2",
                },
              },
            }}

            size="small"
            renderInput={(params) => <TextField  {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <SearchIcon sx={{ color: '#666666' }} />
                ),
              }}
              placeholder="Search NFT" />}
          />
          <br />
          <br />
          <a
            // to="/dashboard"
            onClick={handleDrawer(false)}
            style={{ textDecoration: "none", color: "unset" }}
          >
            <WalletMultiButton className={classes.mobilemultibtn} />
          </a>
          <br />
          <br />

        </Box>
      </Drawer>
    </>
  );
};

export default Header;
const searchNFT = [
  { label: 'NFT 1' },
  { label: 'NFT 6' },
]