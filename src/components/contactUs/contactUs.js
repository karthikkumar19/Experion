import React from 'react';
import classes from './contactUs.module.scss';
import ContactUsData from  './contactUsData';

function contactUs() {
    return (
        <div className={classes.contactUs_container}>
            <div className={classes.contactUs_section}>
                <ContactUsData class={classes.text} header='COMPANY'/>
                <ContactUsData class={classes.text} header='INFORMATION' />
                <ContactUsData class={classes.text} header='INFORMATION'/>
            </div> 
            <div className={classes.contactUs} >
                <p style={{fontWeight:'bold'}}>Contact Us</p>
                <p>info@companyname.com </p>
<p>+9884648340</p>
            </div>
        </div>
    )
}

export default contactUs
