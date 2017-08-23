import React from "react";
import PropTypes from "prop-types";

const storeProvider = Component => {
  const WithStore = (props, { store }) =>
    <Component {...props} store={store} />;

  WithStore.contextTypes = {
    store: PropTypes.object
  };

  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
};

export default storeProvider;
