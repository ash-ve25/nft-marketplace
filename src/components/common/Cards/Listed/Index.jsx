import React from 'react';
import Typography from '@mui/material/Typography'
import { Box, CircularProgress, Alert } from '@mui/material'
import { useStyles } from './Style'
import { Link } from 'react-router-dom';

const Index = ({ data, isError, isLoading, isSuccess }) => {
    const classes = useStyles();
    return (<>
        {isLoading ? (<CircularProgress />) : (
            <>
                {isSuccess && (
                    <>
                        {data.data.filter((data) => data.isProcessed).map((item, i) => (
                            <Link to={`collection/${item.creator_id}`} style={{ textDecoration: 'none', color: 'unset' }}>
                                <Box className={classes.main_container}>
                                    <Typography variant="subtitle2" sx={{ padding: '10px 30px', }}>
                                        {item.name}
                                    </Typography>
                                    <Box  >
                                        <img src={item.logo} alt="nft"
                                            className={classes.listed_img} />
                                    </Box>
                                    <Box display="flex" justifyContent="space-around" my="3px">
                                        <Typography variant="subtitle2" color="#666666">
                                            ◎ 0.0k
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#E2E2E4', }}>
                                            Total Volume
                                        </Typography>
                                    </Box>
                                </Box>
                            </Link>
                        ))}
                    </>
                )}
                {isError && (<Alert severity="error">Something went wrong please try after some time</Alert>)}
            </>
        )}
    </>);
};

export default Index;
