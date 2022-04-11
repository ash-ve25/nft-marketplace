import React from "react";
import {
  Grid,
  Box,
  Alert,
  CircularProgress, Dialog, DialogContent, Button
} from "@mui/material";
import ItemCard from "../../components/Collections/artWork/itemCard/Index";
import { useGetFilteredItemQuery } from '../../app/api/BaseApi'
import { useParams } from "react-router-dom";
import SearchBar from "../../components/Collections/artWork/SearchBar";
import Filter from "../../components/Collections/artWork/Filter";
import { useSelector } from 'react-redux'

const ArtWork = () => {
  const { id } = useParams();
  const filterItem = useSelector((state) => state.filter.filter)
  // if (filter.length === 0 ) {
  //   console.log("null",filter)
  // }
  let filter = [...new Set(filterItem)];

  const filterValue = {
    id, filter
  }
  console.log(filter)

  // const { data, isError, isLoading, isSuccess } = useGetAllItemQuery(id);
  const { data, isError, isLoading, isSuccess } = useGetFilteredItemQuery(filterValue);
  const [search, setSearch] = React.useState(" ");

  const pull_data = (data) => {
    setSearch(data)
  }
  // open mobile filter dialog
  const [openMblFilter, setOpenMblFilter] = React.useState(false);

  const handleClickOpenMblFilter = () => {
    setOpenMblFilter(true);
  };

  const handleCloseMblFilter = () => {
    setOpenMblFilter(false);
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="2" md="3" xs="12">
          <Dialog
            PaperProps={{
              style: { borderRadius: "28px" },
            }}
            open={openMblFilter}
            onClose={handleCloseMblFilter}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <Filter id={id} />
            </DialogContent>
          </Dialog>
          <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <Button
              onClick={handleClickOpenMblFilter}
              size="large"
              sx={{ borderRadius: "50px", }}
              variant="outlined"
            >
              <img
                src={require("../../assets/Home/Vector.png").default}
                alt="icon"
              />
            </Button>
          </Box>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}>
            <Filter id={id} />
          </Box>
        </Grid>
        <Grid item xl="10" md="9" xs="12">
          <SearchBar func={pull_data} />
          <br />
          {isError && (
            <Alert severity="error">Something went wrong</Alert>
          )}
          {isLoading && (<CircularProgress />)}
          {isSuccess && (
            <>
              {data.data.length == 0 && (
                <Alert severity="warning">There is no collection available here</Alert>
              )}
            </>)}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="20px"
          >
            {isSuccess && (<>
              {
                data.data.filter(temp => {
                  const item = JSON.parse(temp?.item)
                  return item?.name?.toLowerCase().includes(search)
                }).map((value, i) => (
                  <>
                    {isSuccess && (
                      <ItemCard data={JSON.parse(value.item)} mint_address={value.mint_address} />
                    )}
                  </>
                ))}
            </>)}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ArtWork;



