import React, { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <div className="vasya" style={{ border: '1px solid gray' }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Some text here</p>
    </Fragment>
  );
};

export default App;
