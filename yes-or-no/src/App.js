import React, { useState, useEffect } from 'react';
import API_KEY from './config';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    function getResult() {
      fetch(`https://helloworld-20191216.azurewebsites.net/api/HttpTrigger1?&code=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setResult(json.ans);
        return json.ans;
      });
    }
    getResult();
  }, []);
  
  return (
    <div className={result==="Yes"?"app green":"app"}>
      <div className="result-text">
        {result?result:"Loading..."}
      </div>
    </div>
    );
  }
  
  export default App;
