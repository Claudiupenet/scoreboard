import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        time: 0,
        isRunning: false
    }

    handleStart = () => {
        this.setState( prevState => ({isRunning: !prevState.isRunning}))
    }

    handleReset = () => {
        this.setState({time: 0})
    }
    
    componentDidMount() {
        setInterval(() => this.second(), 1000)
    }

    second = () => {
        if(this.state.isRunning) {
            this.setState( prevState => ({ time: prevState.time + 1}))
        }
        
    }

    render() {
        return(
            <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{this.state.time}</span>
            <button onClick={this.handleStart} >{!this.state.isRunning ? 'Start' : 'Stop'}</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }
}

export default Stopwatch;