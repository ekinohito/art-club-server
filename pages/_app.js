import '../styles/globals.css'
import "../styles/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {SWRConfig} from "swr";
import React from "react";
import fetcher from "../fetcher";
import {NavigationProvider} from "../context/navigation";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return(
    <SWRConfig
        value={{
          fetcher
        }}
    >
        <NavigationProvider>
            <Component {...pageProps} />
            <Navigation/>
        </NavigationProvider>
    </SWRConfig>
  )

}

export default MyApp
