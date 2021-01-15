import React from 'react';
import classes from './story.module.css';
import play from '../../assets/icons/play.svg'

function imageContainer(props) {
    return (
        <div>
             <div className={classes.imageContainer } >
            <img className={classes.image} src={props.image}/>
            <div className={classes.content + ' ' + props.class }>
            <div className={classes.play}>
                  <img src={play}/>
            </div>
            <div className={classes.text}>
              <h5>At iam decimum annum in spelunca </h5>
            </div>
            </div>
        </div>
        </div>
    )
}

export default imageContainer
