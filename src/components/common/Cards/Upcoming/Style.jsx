import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    test: {
        // "&:hover": {
        // },
        // [theme.breakpoints.down(500)]: {
        // },
    },
    main_container: {
        border: '1px solid #E2E2E4',
        borderRadius: '28px',
        height: '364px',
        width: '604px',
        boxShadow: "0px 6px 24px -4px rgba(145, 158, 171, 0.19)",
        filter: "drop-shadow(0px 0px 1px rgba(145, 158, 171, 0.23))",
        [theme.breakpoints.down(700)]: {
            width: '100%',
            height: 'auto'
        },
    },
    img_text_wrapper: {
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #E2E2E4',
        [theme.breakpoints.down(700)]: {
            flexWrap: 'wrap',
            // gap:'20px'
        },

    },
    text_wrapper: {
        height: '280px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down(700)]: {
            height: 'auto',
            gap: '20px'
        },
    },
    upcoming_img: {
        borderRadius: '0 0 0 28px',
        height: '323px',
        width: '323px',
        // marginTop: '-15px',
        [theme.breakpoints.down(700)]: {
            borderRadius: '0',
            width: '100%'
        },
    },
}))