import { createTheme } from "@material-ui/core";

const h1 = {
  fontWeight: 700,
  fontSize: "53px",
  lineHeight: "64px",
  letterSpacing: "-1.25px",
};

const h2 = {
  fontWeight: 800,
  fontSize: "36px",
  lineHeight: "44px"
};

const h3 = {
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "40px"
};
const h4 = {
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "36px"
};

const h5 = {
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "32px"
};

const h6 = {
  fontWeight: 700,
  fontSize: "22px",
  lineHeight: "28px"
};

const subtitle1 = {
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px"
};

const subtitle2 = {
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "20px"
};

const body1 = {
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px"
};

const body2 = {
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "20px"
};

const overline = {
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px"
};

const caption = {
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "16px"
};

const button = {
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "20px"
};


const defaultTheme = createTheme();

const { breakpoints } = defaultTheme;

const theme = {
  ...defaultTheme,
  typography: {
    h1: {
      ...h1,
      [breakpoints.down("sm")]: {
        ...h2
      }
    },
    h2: {
      ...h2
    },
    h3: {
      ...h3
    },
    h4: {
      ...h4,
      [breakpoints.down("sm")]: {
        ...h5
      }
    },
    h5: {
      ...h5
    },
    h6: {
      ...h6
    },
    subtitle1: {
      ...subtitle1,
      [breakpoints.down("sm")]: {
        ...subtitle2
      }
    },
    subtitle2: {
      ...subtitle2
    },
    body1: {
      ...body1
    },
    body2: {
      ...body2
    },
    button: {
      ...button
    },
    overline: {
      ...overline
    },
    caption: {
      ...caption
    }
  }
};

export default theme;