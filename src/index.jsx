import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from './app/redux/store'
import { Provider } from "react-redux";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
// import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    {/* <HashRouter> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider >
    {/* </HashRouter> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
