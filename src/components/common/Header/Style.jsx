import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  test: {
    // "&:hover": {
    // },
    // [theme.breakpoints.down(500)]: {
    // },
  },
  toolbar: {
    justifyContent: "space-between",
    background: "rgba( 255, 255, 255, 0.35 )",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 1px )",
    WebkitBackdropFilter: "blur( 1px )",
    borderRadius: "50px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    width: "90%",
    margin: "1px auto",
  },
  closeIcon: {
    width: "3rem",
    height: "3rem",
    marginLeft: "auto",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    cursor: "pointer",
    color: "#000",
  },
  sidedrawer: {
    // width: "80vw",
    height: "auto",
    padding: "20px",
    borderRadius: "0 0 50px 50px",
  },
  multibtn: {
    backgroundColor: "#222126",
    color: "white",
    fontWeight: 500,
    fontSize: "14px",
    borderRadius: "50px",
    height: "2.725rem",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
  },
  mobilemultibtn: {
    backgroundColor: "#222126",
    color: "white",
    fontWeight: 500,
    fontSize: "15px",
    borderRadius: "50px",
    height: "2.725rem",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    width: "100%",
  },
}));
