import React from 'react';
import classes from './inspirationCard.module.css';

function inspirationPhotos(props) {
    return (
        <span className={classes.photos + ' ' + props.class}>
            <img src={props.photo1} />
            <img src={props.photo2}/>
            {
                props.photo3 ?   <img src={props.photo3} /> : null
            }
        </span>
    )
}

export default inspirationPhotos;