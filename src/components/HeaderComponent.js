import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    toggleNav() {
        this.setState({ 
            isNavOpen: !this.state.isNavOpen
         });
    }
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand  className="mr-auto" href="/">
                            ZaraFoodBank
                        </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span>Home 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span>About US 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span>Menu 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span>Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                        </Collapse>    
                    </div>      
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Zara Food Bank</h1>
                                <p>
                                    At the Zara Food Bank, our mission is to revolutionize the agricultural markets in developing nations through an innovative investment platform that empowers stakeholders across sectors and creates efficiencies in food production and finance. Using extended shelf-life foods as our core asset, the Zara Food Bank leverages a standardized trading market and operates much like a bank. Our dried food products are held in reserve in a network of strategic locations around the globe and are available for purchase when and where food is needed to normalize volatility in local food markets that are facing shortages due to market inefficiencies, environmental issues, or humanitarian crises.
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;