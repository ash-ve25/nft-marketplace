import React from "react";
import {
    Box,
    Checkbox,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Toolbar, CircularProgress, Alert
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useGetAllAtributeQuery, } from '../../../app/api/BaseApi'
import { useParams } from "react-router-dom";
import { useDispatch,  } from 'react-redux'
import { setFilter } from "../../../app/redux/slices/filterSlice";

const Filter = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { data, isError, isLoading, isSuccess } = useGetAllAtributeQuery(id);
    // isSuccess && console.log("atr,", data)
    // const filter = useSelector((state) => state.filter.filter)

    return (
        <>
            {isError && (<Alert severity="error">Something went wrong</Alert>
            )}
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1" fontWeight="600">
                    Filter
                </Typography>
                <IconButton aria-label="">
                    <img
                        src={require("../../../assets/Home/Vector.png").default}
                        alt="icon"
                    />
                </IconButton>
            </Box>
            <br />
            {isLoading && (<CircularProgress />)}
            {isSuccess && (<>
                {data.data.map((item) => (
                    <>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="subtitle1" fontWeight="600">
                                    {item.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Toolbar
                                    sx={{
                                        marginBottom: "10px",
                                        background: "#F2F2F2",
                                        borderRadius: "50px",
                                    }}
                                >
                                    <Typography
                                    variant="subtitle1"  flexGrow="1">
                                        {item.value}
                                    </Typography>
                                    <Checkbox
                                        size="small"
                                        // value={filter.includes(item.value)}
                                        onClick={(e) => {
                                            dispatch(setFilter({item:item.value.toString(),checked:e.target.checked}));
                                        }}
                                        icon={<CircleOutlinedIcon />}
                                        checkedIcon={<CheckCircleIcon sx={{ color: '#977855' }} />}
                                    />
                                </Toolbar>
                            </AccordionDetails>
                        </Accordion>
                    </>
                ))}
            </>)}
        </>
    );
};

export default Filter