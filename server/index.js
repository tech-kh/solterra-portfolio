import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom/server.js';
import  App  from "../src/route/App.tsx";
import "../src/css/app.css";

const app = express();
const port = 9000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const context = {};
  const content = renderToString(
      <StaticRouter location={req.url} context={context}>
          <App />
      </StaticRouter>
  );
  res.send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>React App</title>
          <link href="../css/tailwind.css" rel="stylesheet" />
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
      </html>
    `
  );
});

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});