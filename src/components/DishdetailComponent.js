import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish) {
      this.setState({selectedDish: dish});
    }

    renderDish(dish){
      if(dish != null){
        return (
          <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" src={dish.image} />     
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        )
      }else{
        return (
          <div></div>
        )
      }
    } 
    render() {
        
        return (
            <div className="container">
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        )
    }

}


export default DishDetail