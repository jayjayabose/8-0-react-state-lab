import React from "react";
import "./App.css";
import "./ScoreBoard.js"
import ScoreBoard from "./ScoreBoard.js";
import GameControls from "./GameControls";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentScore: 0,
      increment: 1,
      playerHasWon: false,
      winningScore: 100
    }
  }

  handleIncrement = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.increment
    });
  };

  handlePay = () => {
    if(this.state.currentScore < 10){
      window.alert(`You can't afford that!`)
      } else {
        this.setState({
          currentScore: this.state.currentScore -=10,
          increment: this.state.increment +=1
        });
      }
      ;
  };

  handlePlayAgain = () => {
    this.setState({
      currentScore: 0,
      increment: 1
    });
  };

  render() {
    //const {}
    if (this.state.currentScore >= this.state.winningScore) {
      return (
        <center>
        <ScoreBoard currentScore={this.state.currentScore}/>
        <h2>You Win!</h2>
        <button onClick={this.handlePlayAgain}>Play again?</button>
        
        </center>
      )
    } 
    return (
      <center>
             
        <ScoreBoard currentScore={this.state.currentScore}/>
        <GameControls 
          increment={this.state.increment}
          handleIncrement={this.handleIncrement}
          handlePay={this.handlePay}
        />
      </center>
    );
    

  }
}

export default App;


/**
 https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs#:~:text=You%20can't%20directly%20call,the%20child%20that%20contains%20setState%20.

 https://reactjs.org/docs/conditional-rendering.html

 https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
 */