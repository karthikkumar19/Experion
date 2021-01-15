import React from 'react';
import InspirationCard from './inspirationCard';
import ins1 from '../../assets/images/ins1.png';
import ins2 from '../../assets/images/ins2.png';
import ins3 from '../../assets/images/ins3.png';
import ins4 from '../../assets/images/ins4.png';
import ins5 from '../../assets/images/ins5.png';
import ins6 from '../../assets/images/ins6.png';
import ins7 from '../../assets/images/ins7.png';
import photo1 from '../../assets/images/inspiration/photo1.png';
import photo2 from '../../assets/images/inspiration/photo2.png';
import photo3 from '../../assets/images/inspiration/photo3.png';
import photo4 from '../../assets/images/inspiration/photo4.png';
import photo5 from '../../assets/images/inspiration/photo5.png';
import photo6 from '../../assets/images/inspiration/photo6.png';
import photo7 from '../../assets/images/inspiration/photo7.png';
import photo8 from '../../assets/images/inspiration/photo8.png';
import photo9 from '../../assets/images/inspiration/photo9.png';
import photo10 from '../../assets/images/inspiration/photo10.png';
import photo11 from '../../assets/images/inspiration/photo11.png';
import photo12 from '../../assets/images/inspiration/photo12.png';
import photo13 from '../../assets/images/inspiration/photo13.png';
import photo14 from '../../assets/images/inspiration/photo14.png';
import photo15 from '../../assets/images/inspiration/photo15.png';
import photo16 from '../../assets/images/inspiration/photo16.png';
import photo17 from '../../assets/images/inspiration/photo17.png';
import photo18 from '../../assets/images/inspiration/photo18.png';
import photo19 from '../../assets/images/inspiration/photo19.png';
import photo20 from '../../assets/images/inspiration/photo20.png';


import classes from './inspirationCard.module.css';

function inspirations() {
    return (
       
      
         <>
             <div className={classes.elementContainer}>
             <div className={classes.element1}>
             <InspirationCard image={ins1} content='Cur tantas regiones barbarorum'  
              photo1={photo1} photo2={photo2} photo3={photo3} />
             </div>
             <div className={classes.element2}>
             <InspirationCard image={ins2} content='Regiones barbarorum' 
             photo1={photo4} photo2={photo5} photo3={photo6}/>
             </div>
             </div>
            
             <div className={classes.elementContainer} style={{marginTop:'15px'}}>
  <div className={classes.element3}>
             <InspirationCard image={ins3} content='Regiones barbarorum' 
             photo1={photo7} photo2={photo8} photo3={photo9} />
             </div>
             <div className={classes.element4}>
             <InspirationCard image={ins4} content='Regiones barbarorum' 
             photo1={photo10} photo2={photo11} photo3={photo12}/>
             </div>
             <div className={classes.element5} >
             <InspirationCard image={ins5} class={classes.fifth} content='At iam decimum annum in spelunca iacet.
              Cur tantas regiones barbarorum' photo1={photo14} photo2={photo13} imageClass={classes.photo_cls} />
             </div>
             </div>

                {/* third one */}

             <div className={classes.elementContainer} style={{marginTop:'15px'}}>
            
             <div className={classes.element6}>
             <InspirationCard image={ins6} content='Regiones barbarorum' photo1={photo15} photo2={photo16} photo3={photo17}/>
             </div>
             <div className={classes.element7}>
             <InspirationCard image={ins7} content='Regiones barbarorum' photo1={photo18} photo2={photo19} photo3={photo20}/>
             </div>
             </div>
           
        
        </>
         
      
    )
}

export default inspirations
