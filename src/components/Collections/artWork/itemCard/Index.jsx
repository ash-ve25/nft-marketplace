import React from 'react';
import Typography from '@mui/material/Typography'
import { Box, } from '@mui/material'
import { useStyles } from './Style'
import { Link } from 'react-router-dom';

const Index = ({ data, mint_address, }) => {
    const classes = useStyles();
    // console.log(data)
    // console.log(mint_address)
    return (<>
        <Link to={`/nft/${mint_address}`} style={{ textDecoration: 'none', color: 'unset' }}>
            <Box className={classes.main_container}>
                <Typography variant="subtitle2" sx={{ padding: '8px 30px', }}>
                    {data.name}
                </Typography>
                <Box  >
                    <img src={data.image} alt="nft" style={{ width: '289px', height: '289px', borderRadius: '' }} />
                </Box>
                <Box display="flex" justifyContent="space-around" mt="5px">
                    <Typography variant="subtitle2" color="#666666">
                        ◎ 0.0k
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#E2E2E4', }}>
                        Total Volume
                    </Typography>
                </Box>
            </Box>
        </Link>
    </>);
};

export default Index;