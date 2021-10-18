import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import MenuItems from './components/MenuComponent';
import {DISHES} from './shared/dishes';
class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
  return(
    <div className="App">
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">ZaraFoodBank</NavbarBrand>
        </div>      
      </Navbar>
      <MenuItems dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
