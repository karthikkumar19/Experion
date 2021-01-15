import React from 'react';
import classes from './inspirationCard.module.css';
import InspirationPhotos from './inspirationPhotos';

function inspirationCard(props) {
    return (
        <div className={classes.inspirationCard } >
            <img className={classes.image} src={props.image}/>
            <div className={classes.content + ' ' + props.class }>
                <p>At iam decimum</p>
                <h3>{props.content}</h3>
                <InspirationPhotos class={props.imageClass} photo1={props.photo1} photo2={props.photo2} photo3={props.photo3} />
            </div>
        </div>
    )
}

export default inspirationCard
