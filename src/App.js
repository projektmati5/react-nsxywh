import React from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0, drugiCounter: 0, trzeciCounter: 0};

  }
  
  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>

        <div><output>{this.state.counter}</output></div>
       <div> <output>{this.state.drugiCounter}</output></div>
       <div onClick={this.wynikIncrement.bind(this)}> <output>{this.state.trzeciCounter}</output></div>
        <button onClick={this.decrement.bind(this)}>-</button>
        
      </div>
    );
  }
  
  increment() {
    this.setState(()=>{return{
      counter: this.state.counter + 1,
      drugiCounter: this.state.drugiCounter + 1
    }})
  }
  
wynikIncrement(){
  this.setState({trzeciCounter:this.state.trzeciCounter+1})
}


  decrement() {
    this.setState({
      counter: this.state.counter - 1,
      drugiCounter: this.state.drugiCounter + 1
    })
  }
}
export default App
//ReactDOM.render(<App />, document.getElementById("app"));

//ReactDOM.render(<App />, document.getElementById("app"));