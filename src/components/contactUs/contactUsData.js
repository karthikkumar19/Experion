import React from 'react';

function contactUsData(props) {
    return (
        <div className={props.class}>
            <p style={{fontWeight:'bold'}}>{props.header}</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Packages</p>
            <p>Contact US</p>
        </div>
    )
}

export default contactUsData
