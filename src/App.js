import React from 'react';
import './App.css';
import form_input from './components/form'


  
function App() {
  return (
    <div className="header_container">
      <div className="left_container">
          <h1>yWaldo</h1>
      <div className="title">
     Earn the Highest Commission 
     and Save on Every Redemption
      </div>
      </div>  
      <div className="right_container">
        <div className="input_container">
          <p className="text">SIGN UP FOR THIS
LIMITED TIME OFFER!</p>
          <form className="App">
          <label>First Name</label>
          <input name="firstName" />
          <label>Last Name</label>
          <input name="firstName" />
          <label>Email</label>
          <input name="email" />
          <input type="submit" />
          {/* <label>YOU'RE ON THE LIST!</label> alert for when the name has been submitted */}
        </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
