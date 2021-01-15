import React from 'react';
import classes from './card.module.scss';
import image1 from '../../assets/images/LearnMore/image1.png';
import image2 from '../../assets/images/LearnMore/image2.png';
import image3 from '../../assets/images/LearnMore/image3.png';
import image4 from '../../assets/images/LearnMore/image4.png';

function learnMoreCards() {
    return (
        <div >
            <div className={classes.cardFlex}>
                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                        <img src={image1} style={{width:'80%'}}/>
                </div>
                <div>
                <img src={image2} src={image2} style={{width:'100%'}} />

                </div>
            </div>
            <div className={classes.cardFlex}>
                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-start'}}>
                <img src={image4} />

                </div>
                <div>
                <img src={image3} style={{width:'80%'}} />

                </div>
            </div>
        </div>
    )
}

export default learnMoreCards
