import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { client } from "./api/apolloClient";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
