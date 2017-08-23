import axios from "axios";
import React from "react";
import DataApi from "state-api";
import ReactDOMServer from "react-dom/server";

import App from "components/App";
import { host, port } from "config";

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(resp.data);

  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData
  };
};

export default serverRender;
