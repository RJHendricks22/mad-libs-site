import React, { Component } from 'react';
import {WordRender} from './WordRender';
import {MadLibGenerate} from './MadLibGenerate';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      madlib: [],
      name: "",
      namedisplay: "show",
      madLibInputs: []
    };
    this.nameChange = this.nameChange.bind(this);
    this.madLibInput = this.madLibInput.bind(this);
    this.hideNameInput = this.hideNameInput.bind(this);
    this.renderMadLib = this.renderMadLib.bind(this);
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
  
  
  
  renderMadLib(e){
    e.preventDefault();
    this.state.madLibInputs = document.getElementsByClassName('WordRender');
    let changedWords = [];
    for (let x=0;x<this.state.madLibInputs.length;x++){
      if (this.state.madLibInputs[x].value != 0){
        changedWords.push(this.state.madLibInputs[x])
      }
    };
    console.log(changedWords)
    console.log(this.state.madLibInputs)
  } 
  
  render() {
    let nameplate= "";

    if (this.state.name === "") {
      nameplate = "Type in your name!";
    } else {
      nameplate = `Hey ${this.state.name}!`;
    };
    
    let original = {word: ""};
    
    let madLibStory = {story: [""]};

    let madLibOutput = this.state.madlib.map( (word,i) => 
        <WordRender key={`word_${i}`} original={word}/>
    );
    return (
      <div className="App">
        <h1>{nameplate}</h1>
        <form action="/signup">
          <div id="nameInput" style={{display: this.state.namedisplay}}>
            <label >What's your name?</label>
            <input name="name" type="text" onChange={this.nameChange}/><button onClick={this.hideNameInput}>Accept</button>
          </div>
          <br/><br/>
          <h2>The madlib will appear here</h2>
          <MadLibGenerate  />
          <p>{this.state.madLibInputs}</p>
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
