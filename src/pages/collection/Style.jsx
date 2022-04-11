import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    test: {
        // "&:hover": {
        // },
        // [theme.breakpoints.down(500)]: {
        // },
    },
    grey_chip: {
        background: "#F2F2F2", width: '181px', padding: '10px 0 10px 30px',
        [theme.breakpoints.down(700)]: {
            width: '40%',
        },
        [theme.breakpoints.down(400)]: {
            width: '38%',
        },

    },
    cricle_img: {
        width: '132px',
        borderRadius: '50%'
    }
}))
