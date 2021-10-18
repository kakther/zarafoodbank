import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dis) {
      this.setState({selectedDish: dis});
    }

    renderDish(dis) {
        if (dis != null) {
            return (
              <Card>                 
                <CardBody>
                  <CardTitle>{dis.name}</CardTitle>
                  <CardText>{dis.description}</CardText>
                </CardBody> 
              </Card>
            )
        }
        else {
          return (
            <div></div>
          )
        }
      }
    render() {
        const plates = this.props.dishes.map((dis) => {
            return (
              <div key={dis.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dis)}>
                  <CardTitle>{dis.name}</CardTitle>      
                  <CardText>{dis.description}</CardText>
                </Card>
              </div>
            );
        });
        return (
            <div className="container">
              <div className="row">
                {plates}
              </div>
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        )
    }

}


export default DishDetail