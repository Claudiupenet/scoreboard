import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';


class App extends Component {
  state = {
    players: [
      {name: 'Player1', id: 0, score: 0},
      {name: 'Player2', id: 1, score: 0},
      {name: 'Player3', id: 2, score: 0},
      {name: 'Player4', id: 3, score: 0},
      {name: 'Player5', id: 4, score: 0}
    ],
    totalPoints: 0
  }

  handleScoreChange = (index, delta) => {
    const players = [...this.state.players];
    players[index].score += delta;
    this.setState( prevState => ({players: players, totalPoints: prevState.totalPoints += delta}))

  }

  handleRemovePlayer = (index) => {
    const players = [...this.state.players];
    players.splice(index,1);
    this.setState({players: players})
  }

  addPlayerHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const players = [...this.state.players];
    players.push({name: e.target.name.value, score: 0, id: players[players.length -1].id + 1})
    this.setState({players: players})
    e.target.name.value='';
  }

  render() {
    return (
      <div className="App">
        <div className="scoreboard">
        <Header title='scoreboard' numOfPlayers={this.state.players.length} totalPoints={this.state.totalPoints} />
        {
          this.state.players.map((player, index) =>  (
            <Player playerName={player.name} 
                    key={player.id.toString()} 
                    playerScore={player.score} 
                    changeScore={this.handleScoreChange} 
                    index={index} 
                    removePlayer={() =>this.handleRemovePlayer(index)} 
            />
          ))
        }
        <AddPlayer addPlayer={this.addPlayerHandler} />
        </div>
      </div>
    );
  }
}

export default App;
