import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      madlib: "",
      name: "",
      namedisplay: "show"
    };
    this.nameChange = this.nameChange.bind(this);
    this.madLibChange = this.madLibChange.bind(this);
    this.hideNameInput = this.hideNameInput.bind(this);
  };

  nameChange(e){
    this.setState({
      name: e.target.value
    });
  };

  madLibChange(e){
    this.setState({
      madlib: e.target.value
    });
  };
  
  hideNameInput(e){
    this.setState({
      namedisplay: "none"
    });
    e.preventDefault();
  };

  render() {
    let nameplate= "";

    if (this.state.name == "") {
      nameplate = "Type in your name!";
    } else {
      nameplate = `Hey ${this.state.name}!`;
    };

    return (
      <div className="App">
        <h1>{nameplate}</h1>
        <form action="/signup">
          <div id="nameInput" style={{display: this.state.namedisplay}}>
            <label for="name">What's your name?</label>
            <input name="name" type="text" onChange={this.nameChange}/><button onClick={this.hideNameInput}>Accept</button>
          </div>
          <br/><br/>
          <h3>Copy and Paste the mad lib</h3>
          <textarea name="madlibinput" onChange={this.madLibChange}></textarea>
          <button onClick={this.renderMadLib}>Render!</button>
          <h2>Here's what you have so far...</h2>
          <p>{this.state.madlib}</p>
        </form>
      </div>
    );
  }
};

export default App;
