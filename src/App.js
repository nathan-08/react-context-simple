import React, { Component } from 'react';
import './App.css';
import {DataContext} from './DataContext';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      num: 0
    }
    this.updateNum = this.updateNum.bind(this);
  }
  updateNum( newNum ) {
    this.setState({ num: newNum })
  }
  render() {
    return (
      <DataContext.Provider value={{
        num: this.state.num,
        updateNum: this.updateNum
      }}>
      <div className="App">
        <h3> Parent Component </h3>
        <h5> ( has state ) </h5>
        <br/>
        <input type="number" value={this.state.num}
        onChange={(e)=>this.setState({num:e.target.value})}/>
        <InnerComponent/>
      </div>
      </DataContext.Provider>
    );
  }
}
// import {DataContext} from './DataContext'
function InnerComponent (props) {
  return(
    <DataContext.Consumer>
      {context=>( 
        <div className="inner-component">
          <h3> inner component </h3> 
          <h5>( look ma, no props )</h5>
          <br/>
          <p>
            Your number is {context.num}.
          </p>
          <input type="number" onChange={(e)=>context.updateNum(e.target.value)}></input>
        </div>
      )}
    </DataContext.Consumer>
  )
}