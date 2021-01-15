import React from 'react'
import './search.scss';
import {FaSearch,FaArrowLeft,FaArrowRight} from 'react-icons/fa';

import playThumb from '../../assets/icons/playThumb.svg';


const Search = (props) => {

   

   


    return (
      <div>
          <div className='search'  >
<div className='box'>
            <input type='text' placeholder='Search' />
            <FaSearch size={20} color='#777'/>

        </div>
         <div className='preview' >
           <img src={props.image} />
           <img style={{position:'absolute',left:'45%',top:'40%',width:'40px',height:'40px'}} src={playThumb}/>
        </div>
                    <div className='buttons'>
                    <FaArrowLeft size={20} color='#fff' onClick={props.prev}/>
                    <h5>vitarum nobis</h5>
                    <FaArrowRight size={20} color='#fff' onClick={props.next} />

                                </div>
                                
       </div>
      



      </div>
     
 
      
       
       
    )
}

export default Search
