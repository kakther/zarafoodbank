import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar className="navbar-dark">
                    <div className="container">
                        <NavbarBrand href="/">ZaraFoodBank</NavbarBrand>
                    </div>      
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h1>Zara Food Bank</h1>
                                <p>At the World Food Bank, our mission is to revolutionize the agricultural markets in developing nations through an innovative investment platform that empowers stakeholders across sectors and creates efficiencies in food production and finance. Using extended shelf-life foods as our core asset, the World Food Bank leverages a standardized trading market and operates much like a bank. Our dried food products are held in reserve in a network of strategic locations around the globe and are available for purchase when and where food is needed to normalize volatility in local food markets that are facing shortages due to market inefficiencies, environmental issues, or humanitarian crises.

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