import React from "react";
import debounce from "lodash.debounce";
import storeProvider from "./storeProvider";

class SearchBar extends React.PureComponent {
  state = { searchTerm: "" };
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);
  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, () => this.doSearch());
  };
  render() {
    return (
      <input
        type="search"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
        placeholder="Enter search term"
      />
    );
  }
}

export default storeProvider()(SearchBar);
