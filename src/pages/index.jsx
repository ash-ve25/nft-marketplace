import Banner from "../components/Home/Banner/Banner";
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Upcoming from "../components/common/Cards/Upcoming/Index";
import Listed from "../components/common/Cards/Listed/Index";
import { useGetAllCollectionQuery } from '../app/api/BaseApi'

export default function Index() {
  const { data, isError, isLoading, isSuccess } = useGetAllCollectionQuery();
  return (
    <>
      <Container maxWidth="lg" sx={{ margin: "80px auto" }}
        disableGutters >
        {/* <Typography variant="h1">initial</Typography> */}
        <Banner />
        <Box margin="24px 0" display="flex" justifyContent="space-between" sx={{ px: { md: "20px", xs: "5px" }, }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { md: "28px", xs: "25px" },
              lineHeight: "36px",
            }}
          >
            Collections
          </Typography>
          <FormControl sx={{ width: { md: "290px", xs: "50%" } }}>
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
        <Box
          display="flex"
          gap="20px"
          justifyContent="center"
          sx={{ flexWrap: { md: 'nowrap', xs: 'wrap' } }}
        >
          <Box display="flex"
            flexDirection='column'
            flexWrap="wrap"
            gap="20px">
            <Upcoming data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap="20px"
          >
            <Listed data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} />
          </Box>
        </Box>

      </Container>
    </>
  );
}
