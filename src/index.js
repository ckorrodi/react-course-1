import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      clock : 0,
      label : "Start"
    };

    this.isRunning = false;
    this.clear = this.clear.bind(this);
    this.start = this.start.bind(this);
  }

  start(){

    if(!this.isRunning)
    {
      this.timer = setInterval(()=>{
        this.setState({clock: this.state.clock + 1});
      }, 1000);
      this.setState({label:"Stop"});
      this.isRunning = true;
    }
    else{
      clearInterval(this.timer);
      this.setState({label:"Start"});
      this.isRunning = false;
    }
  }

  clear(){
    clearInterval(this.timer);
    this.setState({clock: 0});
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <br/>
        CLICK {this.state.clock}s<br/>
        <button onClick={this.start} > {this.state.label} </button>
        <button onClick={this.clear} > Clear </button>
        <br/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
