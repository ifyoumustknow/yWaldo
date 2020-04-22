import React from 'react';
import './App.css';
import form_input from './components/form'


  
function App() {
  return (
    <div className="header_container">
      <div className="left_container">
          <h1>yWaldo</h1>
      <div className="title">
        SIGN UP TODAY TO EARN THE HIGHEST COMMISSIONS
      </div>
      </div>  
      <div className="right_container">
        <div className="input_container"><form_input/></div>
        
      </div>
    </div>
  );
}

export default App;
