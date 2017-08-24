import React from "react";
import PropTypes from "prop-types";

import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext() {
    return { store: this.props.store };
  }
  state = this.props.store.getState();
  setSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };
  render() {
    let articles = this.state.articles;
    if (searchTerm) {
      // Handle searching...
    }
    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList articles={this.state.articles} store={this.props.store} />
      </div>
    );
  }
}

export default App;
