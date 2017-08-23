import React from "react";

import Article from "./Article";

const ArticleList = props => {
  const { articles, store } = props;
  return (
    <div>
      {Object.values(articles).map(article =>
        <Article key={article.id} article={article} store={store} />
      )}
    </div>
  );
};

export default ArticleList;
