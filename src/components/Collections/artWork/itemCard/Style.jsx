import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    test: {
        // "&:hover": {
        // },
        [theme.breakpoints.down(500)]: {
        },
    },
    main_container: {
        borderRadius: '28px',
        width: '290px',
        height: '364px',
        boxShadow: "0px 6px 24px -4px rgba(145, 158, 171, 0.19)",
        background: "#fff",
        borderRadius: "28px",
        [theme.breakpoints.down(700)]: {
            width: '100%',
            height: 'auto',
        },
    },
    image: {
        width: '290px',
        height: '',
        [theme.breakpoints.down(700)]: {
            width: '100%',
        },
    }
}))