import axios from "axios";
import React from "react";
import StateApi from "state-api";
import ReactDOMServer from "react-dom/server";

import App from "components/App";
import { host, port } from "config";

const serverRender = async () => {
  const resp = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: resp.data
  };
};

export default serverRender;
