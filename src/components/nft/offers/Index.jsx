import React from 'react';
import { Typography, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Index = () => {
    return (
        <>
            <Typography sx={{ fontWeight: 600, fontSize: "22px", lineHeight: "28px" }}>
                Offers
            </Typography>
            <br />
            <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '28px' }}>
                <TableContainer >
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead sx={{ border: 'none' }}>
                            <TableRow>
                                <TableCell>Price</TableCell>
                                <TableCell align="right">Expiration</TableCell>
                                <TableCell align="right" >From</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                                        ◎ 24.0
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                                        12 days
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px", color: '#977855' }}>
                                        6g3R...VuN5
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                                        ◎ 1.0
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                                        16 days
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px", color: '#977855' }}>
                                        6g3R...VuN5
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};

export default Index;
