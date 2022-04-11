import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Avatar, Typography, Box, Toolbar, IconButton, Button, Dialog, DialogContent } from '@mui/material'
const Index = () => {
    const [openAccept, setOpenAccept] = React.useState(false);

    const handleClickOpenAccept = () => {
        setOpenAccept(true);
    };

    const handleCloseAccept = () => {
        setOpenAccept(false);
    };
    //delete
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    return (
        <>
            <Toolbar sx={{ flexWrap: "wrap", gap: '20px' }}>
                <Typography sx={{ flexGrow: '1', fontWeight: 600, fontSize: "22px", lineHeight: "28px" }}>
                    <b>Offers</b>
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
            <br/>
            <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '28px' }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ border: 'none' }}>
                            <TableRow>
                                <TableCell>Actions</TableCell>
                                <TableCell >Item</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell  >Listed For</TableCell>
                                <TableCell>From</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TableData.map((data,) => (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Box display="flex" gap="15px">
                                            <Button onClick={handleClickOpenAccept} variant="contained" size="small" color="primary" sx={{ borderRadius: '50px', }}>
                                                Accept
                                            </Button>
                                            <Button onClick={handleClickOpenDelete} size="small" variant="contained" color="primary" sx={{ borderRadius: '50px', color: '#666666', background: '#fff', "&:hover": { color: '#666666', background: '#fff' } }}>
                                                Delist
                                            </Button>
                                        </Box>
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
            <Dialog
                maxWidth="md"
                PaperProps={{
                    style: { borderRadius: '28px' }
                }}
                open={openAccept}
                onClose={handleCloseAccept}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                        Are you sure you want to accept
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "32px" }}>
                        24.43
                    </Typography>
                    <br />
                    <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                        For
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "24px", lineHeight: "32px" }}>
                        NFT Name
                    </Typography>
                    <br />
                    <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                        From
                    </Typography>
                    <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#977855' }}>
                        <b>6g3R...VuN5</b>
                    </Typography>
                    <br />
                    <Box display="flex" gap="20px" justifyContent="space-between">
                        <Button onClick={handleCloseAccept} size="small" variant="contained" sx={{ padding: { md: '10px 50px', xs: '10px 20px' }, color: '#666666', background: '#fff', borderRadius: '50px', "&:hover": { color: '#666666', background: '#fff' } }} >
                            <b>Cancel</b>
                        </Button>
                        <Button onClick={handleCloseAccept} size="small" variant="contained" color="primary" sx={{ borderRadius: '50px', padding: { md: '10px 50px', xs: '10px 20px' }, }}>
                            Take offer
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
            {/* delete */}
            <Dialog
                maxWidth="md"
                PaperProps={{
                    style: { borderRadius: '28px' }
                }}
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <Typography gutterBottom sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: '#666666' }}>
                        Are you sure you want to Delist
                    </Typography>
                    <br />
                    <Box display="flex" gap="20px" alignItems="center">
                        <Avatar alt="Remy Sharp" src={require("../../../assets/Home/Ellipse 1.png")} />
                        {/* {data.item} */}
                        <Typography sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "24px" }}>
                            Title #0000
                        </Typography>
                    </Box>
                    <br />
                    <Box display="flex" gap="20px" justifyContent="space-between">
                        <Button onClick={handleCloseDelete} size="small" variant="contained" sx={{ padding: { md: '10px 50px', xs: '10px 20px' }, color: '#666666', background: '#fff', borderRadius: '50px', "&:hover": { color: '#666666', background: '#fff' } }} >
                            <b>Cancel</b>
                        </Button>
                        <Button onClick={handleCloseDelete} size="small" variant="contained" color="primary" sx={{ borderRadius: '50px', padding: { md: '10px 50px', xs: '10px 20px' }, }}>
                        Delist now
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
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
