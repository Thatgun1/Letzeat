import React, { Component } from 'react';
import './Cards.css';


class FirstCard extends Component {
    render() {
      return <div className='Card-box1'>
      <div className='Card-image' img='./CardsImages/ChixQuesa.jpg' ></div>
     <div className='Card-descr'>
      <p>Pan-Grilled Chicken and Vegetable Quesadillas
Another great starter OR this can work as a light meal.
This selection works beautifully on an outdoor grill, but can also be made indoors (when it�s too cold to grill on Super Bowl Sunday)
Ingredients are easy to pull together, you�re applying your new-found skills at saut�ing vegetables and plenty of chopping.
When made correctly, it will have a light, crunchy outside with soft, melted blend of flavors inside.
I have won several side dish awards at barbecue contests with this favorite.
Now... the secret is in your hands.</p>
</div>
      </div>

    }
}




export default FirstCard;