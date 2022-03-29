import React from "react";
import type { AppProps } from "next/app";

import "../style/index.scss";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
