import React from 'react';
import { Typography, Box } from '@mui/material'

const Banner = () => {
    return (
        <>
            <Box className="home_banner" sx={{ borderRadius: { md: '64px', xs: '32px' } }}>
                <Box display="flex" justifyContent="flex-start" alignItems="center" height="336px">
                    <Typography sx={{ paddingLeft:{md:'50px',xs:'10px'}, fontWeight: 600, fontSize: { md: "57px", xs: '36px' }, lineHeight: { md: "64px", xs: '40px' } }}>
                        Verified & Curated<br /> Digital Art
                    </Typography>
                </Box>
            </Box>
        </>
    )
};

export default Banner;
