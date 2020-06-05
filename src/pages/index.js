import React, { useState } from 'react';

const IndexPage = ({ data }) => {
  const [hi, setHi] = useState(false);
  console.log(data);

  const sayHi = () => {
    setHi(!hi);
  };
  return (
    <div>
      <button onClick={sayHi}>Click me to say hi</button>
      {hi ? <h1>Hello, hi</h1> : null}
      <h1>This is the index page</h1>
    </div>
  );
};

export default IndexPage;
