import React from 'react'
import {
  Box,
  IconButton,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import {  useSelector } from 'react-redux'

const SearchBar = ({ func }) => {
  const [search, setSearch] = React.useState(" ");
  func(search);
  // console.log(search)
  const handleDelete = {};
  // 
  const filter = useSelector((state) => state.filter.filter)
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        justifyContent="space-between"
      >
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
        <Autocomplete
          disablePortal
          id="disable-close-on-select"
          options={searchNFT}

          sx={{
            width: "50%",
            borderRadius: `16px`,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: `16px`,
              },
            },
          }}

          size="small"
          renderInput={(params) => <TextField
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <SearchIcon sx={{ color: '#666666' }} />
              ),
            }}
            label="Search NFT" />}
        />
        <FormControl sx={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-label" size="small">
            Sort by
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort by"
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
      </Box>
      <br />
      <Box>
        {filter.map((data) => (
          <>
            <Chip
              label={data}
              variant="outlined"
              onDelete={handleDelete}
              sx={{ marginRight: "10px" }}
            />
          </>
        ))}
        <Button size="small" variant="text" color="primary">
          Clear All
        </Button>
      </Box>
    </>
  );
};

const searchNFT = [
  // { label: 'NFT 1' },
  // { label: 'NFT 2' },
  // { label: 'NFT 3' },
  // { label: 'NFT 4' },
  // { label: 'NFT 5' },
  // { label: 'NFT 6' },
]

export default SearchBar