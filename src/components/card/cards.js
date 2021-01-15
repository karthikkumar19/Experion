import React from 'react';
import card1 from '../../assets/images/card1.jpg';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
import Card from './card';



function Cards(props) {
   
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',flexDirection:'row',marginBottom:'60px'}} >
       <Card image={card1} text='sample text' />
       <Card image={card2} text='Quae excelsiores
Dant clariora ' />
       <Card image={card3} text='sample text' />
       <Card image={card4} text='sample text' />
        </div>
    )
}

export default Cards
