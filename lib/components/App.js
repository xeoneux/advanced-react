import React from "react";

import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    return <div />;
  }
}

export default App;
