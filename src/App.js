import React from "react";
import Questions from "./Questions";
import data from "./data";

const App = () => {
  return (
    <div className='container'>
      <Questions questions={data} />
    </div>
  );
};

export default App;
