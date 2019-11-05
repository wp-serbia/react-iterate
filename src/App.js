import React from 'react';
import ProductName from "./components/Products";
import './App.scss';

function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">B2B Product List</h1>
        </div>
      </div>
      <ProductName />
    </div>

  );
}

export default App;
