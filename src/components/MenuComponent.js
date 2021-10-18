import React, { Component } from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg } from 'reactstrap';
// import DishDetail from './DishdetailComponent';
class MenuItems extends Component {
     

    render() {
        const menuItems = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card>
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                   <CardImg width="100%" src={dish.image} />
                   
                </Card>

              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menuItems}               
            </div>           
          </div>
        );
    }
}

export default MenuItems;