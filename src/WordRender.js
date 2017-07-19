import React, { Component } from 'react';

export class WordRender extends Component {
  constructor(props){
    super(props);
    this.state ={
      madLibOptions: 0
    }
    this.wordMenu = this.wordMenu.bind(this);
  };

  wordMenu(e){
    e.preventDefault();

    let madLibOption = [
      this.props.original, "_Noun_", "_Adjective_", "_Verb_", "_BodyPart_", "_PersonInRoom_" 
    ];
    let i = Number(e.target.value)+1;
    if (i < madLibOption.length){
      e.target.innerText = madLibOption[i];
      e.target.value = i;
    } else if (i >= 6){
      e.target.value = this.state.madLibOptions
      e.target.innerText = this.props.original
    } else {
      alert("Uh oh")
    }
  };

  render(){
    return(
      <button className="WordRender" onClick={this.wordMenu} value={this.state.madLibOptions} >{this.props.original}</button>
    );
  }
};

