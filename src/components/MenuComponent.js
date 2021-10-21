import React, { Component } from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    // onDishSelect(dish){
    //   this.setState({ selectedDish: dish });
    // }

    // renderDish(dish){
    //   if(dish != null){
    //     return (
    //       <Card>
    //         <CardImg width="100%" src={dish.image} />     
    //         <CardBody>
    //           <CardTitle>{dish.name}</CardTitle>
    //           <CardText>{dish.description}</CardText>
    //         </CardBody>
    //       </Card>
    //     )
    //   }else{
    //     return (
    //       <div></div>
    //     )
    //   }
    // } 

    render() {
        const menuItems = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 mt-5">
              <Card onClick={() => this.props.onClick(dish.id)}>
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

export default Menu;