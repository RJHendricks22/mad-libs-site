import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      madlib: [],
      name: "",
      namedisplay: "show",
      madLibOptions: 0
    };
    this.nameChange = this.nameChange.bind(this);
    this.madLibInput = this.madLibInput.bind(this);
    this.hideNameInput = this.hideNameInput.bind(this);
    this.wordMenu = this.wordMenu.bind(this);
  };

  nameChange(e){
    this.setState({
      name: e.target.value
    });
  };

  madLibInput(e){
    let inputMsg = e.target.value.split(' ');
    this.setState({
      madlib: inputMsg
    });
  };
  
  hideNameInput(e){
    this.setState({
      namedisplay: "none"
    });
    e.preventDefault();
  };
  
  wordMenu(e){
    e.preventDefault();
    
    let madLibOption = [
      e.target.innerText, "*Noun", "*Adjective", "*Verb", "*BodyPart", "*PersonInRoom" 
    ];
    let i = Number(e.target.value) + 1;
    if (i < madLibOption.length){
      console.log(e.target.value)
      console.log(e.target.original)
      e.target.innerText = madLibOption[i];
      e.target.value = i;
    } else if (i >= 6){
      console.log(e.target.value)
      e.target.value = this.state.madLibOptions
    } else {
      alert("Uh oh")
    }
  };
  
  render() {
    let nameplate= "";

    if (this.state.name === "") {
      nameplate = "Type in your name!";
    } else {
      nameplate = `Hey ${this.state.name}!`;
    };
    
    let madLibOutput = this.state.madlib.map( (word,i) => 
        <button key={`word_${i}`} onClick={this.wordMenu} value={this.state.madLibOptions}>{word}</button>
    );
    
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
          <textarea name="madlibinput" onChange={this.madLibInput}></textarea>
          <br />
          <button onClick={this.renderMadLib}>Render!</button>
          <h2>Here's what you have so far...</h2>
          <div className="madlibOutput">{madLibOutput}</div>
        </form>
      </div>
    );
  }
};

export default App;
