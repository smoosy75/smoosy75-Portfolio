import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n.js";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
