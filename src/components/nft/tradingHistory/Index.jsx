import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Toolbar, Typography, Box, IconButton, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Index = () => {
    return (
        <>
            <Toolbar sx={{flexWrap:"wrap"}}>
                <Typography sx={{ flexGrow: '1', fontWeight: 600, fontSize: "22px", lineHeight: "28px" }}>
                    <b>Trading history</b>
                </Typography>
                <Box display="flex"  gap="10px" alignItems="center">
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
      <br/>
            <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '28px' }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ border: 'none' }}>
                            <TableRow>
                                <TableCell>Event</TableCell>
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

export default Index;

const TableData = [
    {
        event: <>event</>,
        price: <>◎ 32.0</>,
        from: <>9Lve...76DQ</>,
        to: <>9Lve...76DQ</>,
        date: <>4 hours ago</>,
    },
    {
        event: <>event</>,
        price: <>◎ 32.0</>,
        from: <>9Lve...76DQ</>,
        to: <>9Lve...76DQ</>,
        date: <>4 hours ago</>,
    },
    {
        event: <>event</>,
        price: <>◎ 32.0</>,
        from: <>9Lve...76DQ</>,
        to: <>9Lve...76DQ</>,
        date: <>4 hours ago</>,
    }
]