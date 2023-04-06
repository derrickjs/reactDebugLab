import React, { Component } from "react"; // component was not capitalized. Found this by looking carfully for syntax errors.
import "./App.css";


class App extends Component {
  constructor(props){ // missing constructor .  Using constructor helps initialize the state of the componant
  super(props);  // missing super(props) which is needed to access the this keyword from componant.

  //missing this keyword. Must use this here so that handlebutton click can properly use the this keyword.
  this.state = {   
    message: "Welcome to my React app",
    counter: 0
  };

}
// function below should have been an arrow function.  Just best practice with react to use ES6.
  handleButtonClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.handleButtonClick}>Click me</button>
        <p>You have clicked the button {this.state.counter} times.</p>
      </div>
    );
  }
}

export default App;