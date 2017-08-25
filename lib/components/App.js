import React from "react";
import PropTypes from "prop-types";
import pickBy from "lodash.pickby";
import Perf from "react-addons-perf";
if (typeof window !== "undefined") {
  window.Perf = Perf;
}

import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";
import Timestamp from "./Timestamp";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return { store: this.props.store };
  }
  state = this.props.store.getState();
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
    setImmediate(() => Perf.start());
    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 5000);
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, "i");
    if (searchTerm) {
      articles = pickBy(
        articles,
        article => article.title.match(searchRE) || article.body.match(searchRE)
      );
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
