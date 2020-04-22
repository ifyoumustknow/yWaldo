import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";


export function form_input() {
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form className="App" onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" />
      <label>Last Name:</label>
      <input name="firstName" />

      <label>Email</label>
      <input name="email" />

      <input type="submit" />
    </form>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
