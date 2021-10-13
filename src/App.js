import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

class App extends Component{
  render() {
  return(
    <div className="App">
      <Navbar color="dark">
        <div className="container">
          <NavbarBrand href="/">ZaraFoodBank</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
}

export default App;
