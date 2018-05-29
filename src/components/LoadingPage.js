import React from 'react';

const LoadingPage = (props) => {
  return (
    <div className="loader">
      <img src="/images/loader.gif" alt="Expensify Loading" className="loader__image"/>
    </div>
  );
};

export default LoadingPage;