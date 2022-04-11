import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, CircularProgress } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useStyles } from "./Style";
import LanguageIcon from "@mui/icons-material/Language";

const Index = ({ data, isError, isLoading, isSuccess }) => {
  const classes = useStyles();
  return (
    <>
      {isLoading ? (<CircularProgress />) : (
        <>
          {isSuccess && (
            <>
              {data.data.filter((data) => !data.isProcessed).map((item, i) => (
                <Box className={classes.main_container}  >
                  <Typography variant="subtitle2" sx={{ padding: "10px 30px", }}    >
                    {item.name}
                  </Typography>
                  <Box className={classes.img_text_wrapper} >
                    <Box sx={{ position: 'relative' }}>
                      <img src={item.logo} alt=""
                        className={classes.upcoming_img} />
                      <Button 
                        sx={{
                          background: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "100px",
                          color: "#fff",
                          "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                          position: 'absolute',
                          bottom: '15px',
                          left: '15px'
                        }}
                      >
                        Upcoming
                      </Button>
                    </Box>
                    <Box className={classes.text_wrapper}>
                      <Typography variant="subtitle1" flexGrow="1"   >
                        {item.description}
                      </Typography>
                      <div>
                        <a href={item.website} style={{ textDecoration: 'none', }} target="_blank" rel="noopener noreferrer nofollow">
                          <Button
                            className={classes.btn}
                            sx={{
                              background: "#222126",
                              color: "#fff",
                              borderRadius: "100px",
                              "&:hover": { background: "#222126" },
                            }}
                          >
                            <LanguageIcon />
                          </Button>
                        </a>
                        <a href={item.twitter} style={{ textDecoration: 'none', }} target="_blank" rel="noopener noreferrer nofollow">
                          <Button
                            className={classes.btn}
                            sx={{
                              marginLeft: "20px",
                              background: "#222126",
                              borderRadius: "100px",
                              color: "#fff",
                              "&:hover": { background: "#222126" },
                            }}
                          >
                            <TwitterIcon />
                          </Button>
                        </a>
                      </div>
                    </Box>
                  </Box>
                </Box>
              ))}
            </>
          )}
        </>
      )}
    </>);
};

export default Index;