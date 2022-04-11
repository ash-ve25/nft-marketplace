import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import ArtWork from "./ArtWork";
import Activity from "./Activity";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Container, Box, Typography, Grid, Button, Alert, CircularProgress } from "@mui/material";
import { useStyles } from "./Style";
import { useGetAllCollectionQuery } from '../../app/api/BaseApi'
import { useParams } from 'react-router-dom'

const Tab = styled(TabUnstyled)`
  font-family: Montserrat;
  color: #666666;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: transparent;
  width: 150px;
  padding: 15px 16px;
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
  width: 300px;
  border-radius: 50px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;
const Index = () => {
  const classes = useStyles();
  const [collection, setCollection] = React.useState("")
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetAllCollectionQuery();

  React.useEffect(() => {
    if (isSuccess) {
      let selectedData
      (() => {
        data.data.map(item => {
          if (item.creator_id === id) {
            selectedData = item
            setCollection(selectedData)
          }
        })
      })()
    }
  }, [isSuccess])
  // console.log(fetchedNft.name)
  return (
    <>
      {isError && (<Alert severity="error">Something went wrong please try after some time</Alert>)}

      {isLoading && (<CircularProgress />)}

      <Container maxWidth="lg" sx={{ margin: "100px auto" }}>
        <Box display="flex" alignItems="center" gap="5px" marginBottom="5px">
          <a href={collection.website} style={{ textDecoration: 'none', }} target="_blank" rel="noopener noreferrer nofollow">
            <Button
              aria-label=""
              sx={{
                background: "#fff",
                color: "#000",
                border: "1px solid #E2E2E4",
                borderRadius: '100px',
                "&:hover": { background: "#fff" },
              }}
            >
              <LanguageIcon />
            </Button>
          </a>
          <a href={collection.twitter} style={{ textDecoration: 'none', }} target="_blank" rel="noopener noreferrer nofollow">
            <Button
              aria-label=""
              sx={{
                background: "#fff",
                color: "#000",
                border: "1px solid #E2E2E4",
                borderRadius: '100px',
                "&:hover": { background: "#fff" },
              }}
            >
              <TwitterIcon />
            </Button>
          </a>
          <Typography variant="h4" sx={{ marginLeft: '10px' }} >
            {collection.name}
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="stretch"
          wrap="wrap"
        >
          <Grid item xl="6" md="6" sm="7" xs="12" sx={{ display: "flex", flexWrap: { md: 'nowrap', sm: 'nowrap', xs: 'wrap' }, alignItems: 'center', gap: { md: '0', xs: '10px' } }}>
            <img
              src={collection.logo}
              alt="collection"
              className={classes.cricle_img}
            />
            <Box display="flex" flexWrap="wrap" gap="5px">
              <Box
                className={classes.grey_chip}
                sx={{ borderRadius: "28px 28px 12px 28px" }}
              >
                <Typography fontSize="12px" lineHeight="16px"  >
                  Floor Price
                </Typography>
                <Typography variant="body1" fontWeight="600" >
                  ◎ 24.00
                </Typography>
              </Box>
              <Box
                className={classes.grey_chip}
                sx={{ borderRadius: "28px 28px 28px 12px" }}
              >
                <Typography fontSize="12px" lineHeight="16px"  >
                  Avg Sale Price
                </Typography>
                <Typography variant="body1" fontWeight="600" >
                  ◎ 24.00
                </Typography>
              </Box>
              <Box
                className={classes.grey_chip}
                sx={{ borderRadius: "28px 12px 28px 28px" }}
              >
                <Typography fontSize="12px" lineHeight="16px"  >
                  Total Volume
                </Typography>
                <Typography variant="body1" fontWeight="600" >
                  ◎ 817364.25
                </Typography>
              </Box>
              <Box
                className={classes.grey_chip}
                sx={{ borderRadius: "12px 28px 28px 28px" }}
              >
                <Typography fontSize="12px" lineHeight="16px"  >
                  Total Listed
                </Typography>
                <Typography variant="body1" fontWeight="600" >
                  6
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl="4" md="4" sm="4" xs="12">
            <Typography variant="body1" color="#666666" >
              {collection.description}
            </Typography>
          </Grid>
        </Grid>
        {/*tabs  */}
        <br />
        <Box>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>Artwork</Tab>
              <Tab>Activity</Tab>
            </TabsList>
            <TabPanel value={0}>
              <Box>
                <ArtWork />
              </Box>
            </TabPanel>
            <TabPanel value={1}>
              <Box>
                <Activity />
              </Box>
            </TabPanel>
          </TabsUnstyled>
        </Box>
      </Container>
    </>
  );
};

export default Index;
