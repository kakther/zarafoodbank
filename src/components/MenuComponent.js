import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardImg } from 'reactstrap';

   function RenderMenuItem({dish, onClick}) {
     return(
      <Card onClick={() => onClick(dish.id)}>
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
         <CardImg width="100%" src={dish.image} />     
      </Card>
     );
}
     const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 mt-5">
            <RenderMenuItem dish={dish} onClic={props.onClick}/>
          </div>
        );
    });


    return (
      <div className="container">
        <div className="row">
              {menu}               
        </div>   
      </div>
    );

}

    
export default Menu;
