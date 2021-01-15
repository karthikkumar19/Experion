import React from 'react'
import classes from './signUp.module.css';
function signUp() {
    return (
        <div className={classes.signUp_container}>
            <div className={classes.input_container}>
                <div className={classes.inputs}>
                <input type='text' placeholder='Name' /> 
                <input type='text' placeholder='Email' /> 
                <input type='text' placeholder='Phone Number' /> 
                </div>
               
                <div className={classes.signUp_button}>
                       <h6> SIGN UP NOW </h6>
                </div>
            </div>
        </div>
    )
}

export default signUp
