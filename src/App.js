import Preson from "./Component/Person"
import React from "react";
import './App.css';

 class App extends React.Component {
  constructor(){
  super()
  this.state={
    show:false
  }
  this.handelShow=()=>{
      this.setState({ show :! this.state.show})
  }
  }
  render (){
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <button onClick={this.handelShow}>Hide</button>
            <Preson />
          </>
        ) : (
          <button onClick={this.handelShow}>Show</button>
        )}
      </div>
    );
  }
}

export default App;
