import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Page from './Page';

const Search = ({ location }) => {
  const { q } = queryString.parse(location.search);
  
  const title = q.length > 2
    ? `Search results for &laquo;${q}&raquo;`
    : 'Type your search query';

  return (
    <Page title={title}>
      
    </Page>
  );
};

export default withRouter(Search);
