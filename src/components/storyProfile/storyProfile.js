import React from 'react';
import classes from './storyProfile.module.css';

function storyProfile(props) {
    return (
        <div>
            <div className={classes.container}>
                <img className={classes.image} src={props.image}/>
                <div className={classes.textContainer}>
                        <h6>{props.text}</h6>
                        <h6>{props.date}</h6>
                </div>
            </div>
            <hr style={{borderTop:'1px solid #455158'}} ></hr>
        </div>
    )
}

export default storyProfile
