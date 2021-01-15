import React from 'react';
import play from '../../assets/icons/play.svg';
import classes from './story.module.css';
import {FaTimes} from 'react-icons/fa';

const PhotoViewer = props  => {
    return (
        <div style={{background:' #1F2E33',position:'relative'}} >
            <img className={classes.image} src={props.imageUrl}></img>
            <div className={  ' ' + props.class }>
            <div className={classes.Photoplay}>
                  <img src={play}/>
            </div>
            </div>
            <div  className={classes.close} onClick={props.close}>
            <FaTimes color='white'  size={30}/>

            </div>
        </div>
    )
}

export default PhotoViewer
