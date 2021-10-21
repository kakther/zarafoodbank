import React, { Component } from 'react';
import Main from './components/MainComponent';



class App extends Component{

  render() {
  return(
    <div className="Main">
      <Main
        onClick={(dishId) => this.onDishSelect(dishId)}/>
    </div>
  );
}
}

export default App;
