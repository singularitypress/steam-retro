import { writeFileSync } from "fs";
import { resolve } from "path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const AppDoc = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Hello World!</title>
        <link rel="stylesheet" type="text/css" href="bundle.css" />
      </head>
      <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
      </body>
    </html>
  );
};

writeFileSync(
  `${resolve("build")}/index.html`,
  `<!DOCTYPE html>${renderToStaticMarkup(<AppDoc />)}`,
);
