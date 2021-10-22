import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


function RenderDish({dish}){
          return (
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} />     
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          
        )    
    } 

    function RenderComment({comments}){
      if(comments != null)
        return <div class="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <ul>
                    {comments.map((comment) => {
                      return (
                        <li>
                          <p>{comment.comment}</p>
                        </li>
                      )
                    })}
                  </ul>
              </div>
              else
                    return(
                      <div></div>
                    )
    }
   const DishDetail = (props) => {
        if(props.dish != null)
          return (
            <div className="container">
            <div className="row">
              <RenderDish dish={props.dish}/>
              <RenderComment comments={props.comments}/>
            </div>
          </div>
          )
          else 
            return (
              <div></div>
            )
    }




export default DishDetail