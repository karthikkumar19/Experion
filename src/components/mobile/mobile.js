import React from 'react';
import mic from '../../assets/icons/mic.svg';
import micround from '../../assets/icons/micround.svg';
import home from '../../assets/icons/home.svg';
import para from '../../assets/icons/para.svg';
import line from '../../assets/icons/line.svg';
import halfline from '../../assets/icons/halfline.svg';
import classes from './mobile.module.css';
import Button from '../Button/button';

function mobile() {
    return (
        <div className={classes.mobileContainer}>
            <div className={classes.mic}>
            <img src={micround} />
            <img src={mic} />

            </div>
            <div className={classes.screen}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',zIndex:'1'}} >
                        <h5>Lorem Ipsum Dolor <br/>
Sit Amet</h5>
<p>At iam decimum annum in spelunca <br/> iacet. Cur tantas regiones</p>
<Button class={classes.button}>CONTACT</Button>
                </div>
            </div>
            <div className={classes.iconContainer}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <img src={home}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={halfline}/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <img src={para} />
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={line}/>
                    <img src={halfline}/>
                </div>
            </div>
        </div>
    )
}

export default mobile
