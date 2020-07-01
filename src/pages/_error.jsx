import React from 'react';
import Error from 'next/error';

const ErrorPage = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server. Stupid server. Don't worry, it has been reported and I will maybe fix it.`
        : 'An error occurred on client. Sorry. This is a me problem and not a you problem :('}
    </p>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
