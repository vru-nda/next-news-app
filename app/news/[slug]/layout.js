import React from 'react';

const NewsDetailsLayout = ({children, modal}) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailsLayout;
