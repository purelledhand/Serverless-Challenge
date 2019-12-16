import React, { useState, useEffect } from 'react';
import API_KEY from './config';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    function getResult() {
      fetch(`https://dreidel-purelledhand.azurewebsites.net/api/spin?code=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setResult(json.data);
        return json.data;
      });
    }
    getResult();
  }, []);
  
  return (
    <div className="app">
      <div className="result">
        {result?result.shape:""}
      </div>
      <div className="result">
        {result?result.name:""}
      </div>
    </div>
    );
  }
  
  export default App;
