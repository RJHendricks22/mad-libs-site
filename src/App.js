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
      namedisplay: "show"
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
    let wordsArray = document.getElementsByClassName('WordRender');
    console.log( wordsArray )
    return wordsArray
//    let changedWords = [];
//    for (let x=0;x<wordsArray.length;x++){
//      if (wordsArray[x].value != 0){
//        changedWords.push(wordsArray[x])
//      }
//    };
//    renderInputFields(adjectives)
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
    
    let renderInputFields = function(inputArray){ 
      inputArray.map((inputField,i) => 
        <p key={i} >inputField</p>              
      )
    };

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
          <MadLibGenerate madLibStory={JSON.stringify(this.wordsArray)} />
          <p>{this.wordsArray}</p>
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
