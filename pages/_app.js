import '../styles/globals.css'
import "../styles/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {SWRConfig} from "swr";
import React from "react";
import fetcher from "../fetcher";

function MyApp({ Component, pageProps }) {
  return(
    <SWRConfig
        value={{
          fetcher
        }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )

}

export default MyApp
