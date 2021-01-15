import React from 'react';
import classes from './card.module.scss';




function Card(props) {
  
    
    return (
        <div className={classes.image}  >
            <img className={classes.image__img} src={props.image} />
            <div className={classes.image__overlay}>
                <p className={classes.image_text}>
{props.text}
                </p>
            </div>
        </div>
    )
}

export default Card
