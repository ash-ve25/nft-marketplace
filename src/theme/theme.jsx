

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#222126",
      dark: "#222126",
    },
    secondary: {
      main: "#1B1B1B",
      light: "#F9F8F7",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});


const theme = {
  ...defaultTheme,
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: "53px",
          lineHeight: "64px",
          letterSpacing: "-1.25px",
          [defaultTheme.breakpoints.down(700)]: {
          },
        },
        h2: {
          fontWeight: 800,
          fontSize: "36px",
          lineHeight: "44px"
        },

        h3: {
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "40px"
        },
        h4: {
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: "36px"
        },

        h5: {
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "32px"
        },

        h6: {
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "28px"
        },

        subtitle1: {
          // fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          color: '#666666'
        },

        subtitle2: {
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px"
        },

        body1: {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px"
        },

        body2: {
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px"
        },

        overline: {
          fontWeight: "normal",
          fontSize: "12px",
          lineHeight: "16px",
        },

        caption: {
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px"
        },

        button: {
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px"
        },
      },
    },
  },

};

export default theme;
