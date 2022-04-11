import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Avatar, Typography, Box, Toolbar, IconButton } from '@mui/material'
const Index = () => {
  return (
    <>
      <Toolbar sx={{ flexWrap: "wrap",gap:'20px' }}>
        <Typography sx={{ flexGrow: '1', fontWeight: 600, fontSize: "22px", lineHeight: "28px" }}>
          <b>All Activity</b>
        </Typography>
        <Box display="flex" gap="10px" alignItems="center">
          <span style={{ marginBottom: '0', background: "#977855", backdropFilter: "blur(10px)", color: '#fff', borderRadius: '100px', padding: '5px 15px' }}>
            <b>Listing</b>
          </span>
          <span style={{ marginBottom: '0', background: "#977855", backdropFilter: "blur(10px)", color: '#fff', borderRadius: '100px', padding: '5px 15px' }}>
            <b>Offer</b>
          </span>
          <span style={{ marginBottom: '0', background: "#977855", backdropFilter: "blur(10px)", color: '#fff', borderRadius: '100px', padding: '5px 15px' }}>
            <b>Sale</b>
          </span>
          <IconButton aria-label="" sx={{ background: '#fff', color: '#000', border: '1px solid #E2E2E4', "&:hover": { background: '#fff' } }}>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <br />
      <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '28px' }}>
        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ border: 'none' }}>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell >Item</TableCell>
                <TableCell>Price</TableCell>
                <TableCell  >From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TableData.map((data,) => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span style={{ color: '#977855', padding: '5px 10px', border: '1px solid #977855', borderRadius: '100px' }}>
                      <b>{data.event}</b>
                    </span>
                  </TableCell>
                  <TableCell >
                    <Box display="flex" gap="20px" alignItems="center">
                      <Avatar alt="Remy Sharp" src={require("../../../assets/Home/Ellipse 1.png").default} />
                      {/* {data.item} */}
                      <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                        Title #0000
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                      {data.price}
                    </Typography>
                  </TableCell>
                  <TableCell >
                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px", color: '#977855' }}>
                      {data.from}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px", color: '#977855' }}>
                      {data.to}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                      {data.date}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Index

const TableData = [
  {
    event: <>event</>,
    item: <>item</>,
    price: <>◎ 32.0</>,
    from: <>9Lve...76DQ</>,
    to: <>9Lve...76DQ</>,
    date: <>4 hours ago</>,
  },
  {
    event: <>event</>,
    item: <>item</>,
    price: <>◎ 32.0</>,
    from: <>9Lve...76DQ</>,
    to: <>9Lve...76DQ</>,
    date: <>4 hours ago</>,
  },
  {
    event: <>event</>,
    item: <>item</>,
    price: <>◎ 32.0</>,
    from: <>9Lve...76DQ</>,
    to: <>9Lve...76DQ</>,
    date: <>4 hours ago</>,
  }
]
