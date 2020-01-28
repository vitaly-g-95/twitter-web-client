import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => (
  <div className="px-3">
    <h1
      className="h4"
      dangerouslySetInnerHTML={{
        __html: title
      }}
    />

    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string.isRequired
};

export default Page;
