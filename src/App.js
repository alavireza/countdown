import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'April 3, 2020',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Some Title</div>
        <div className="App-date">{this.state.deadline}</div>
        <Clock deadline={ this.state.deadline }/>
      </div>

    );
  }
}

export default App;
