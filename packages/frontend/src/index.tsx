import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { JWTAuthProvider } from "contexts/JWTAuth";
import "nprogress/nprogress.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import ReactDOM from "react-dom";
import "react-image-lightbox/style.css";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import SettingsProvider from "./contexts/settingsContext";
import reportWebVitals from "./reportWebVitals";
import "./__fakeData__";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <JWTAuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </JWTAuthProvider>
      </SettingsProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
