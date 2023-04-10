import "@fontsource/public-sans";
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider, } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./components/AppRouter/AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <CssVarsProvider>
        <CssBaseline />
        <AppRouter />
      </CssVarsProvider>
  </React.StrictMode>,
);
