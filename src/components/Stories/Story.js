import React, { Component } from "react";
import Slider from "react-slick";
import Modal from '../UI/Modal/Modal';
import PhotoViewer from './PhotoViewer';
import story1 from '../../assets/images/story1.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageContainer from './imageContainer';
export default class Story extends Component {
  state = {
    continue:false,
    url:''
  }

  photoHandler = (url) => {
    this.setState({continue:true,url:url})
  }

  cancel = () => {
    this.setState({continue:false})
  }
    render() {
      
        const settings = {
            infinite: true,
            centerMode: true, 
            centerPadding: '0px',
            speed: 500,
            speed: 500,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide:1,
            useTransform:true,
            useCSS:true,
            autoplay: true,
            autoplaySpeed: 4000
          };
        return (
            <div style={{margin:'0%',marginTop:'2%',width:'100%'}}>
                 <Slider {...settings}>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1} />
                   </div>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1}/>
                   </div>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1}/>
                   </div>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1}/>
                   </div>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1}/>
                   </div>
                   <div onClick={() => this.photoHandler(story1)}>
                   <ImageContainer image={story1}/>
                   </div>
          
        </Slider>
        <Modal show={this.state.continue} modalClosed={this.cancel}>
             <PhotoViewer imageUrl ={this.state.url} close={this.cancel}/>
              </Modal>  
            </div>
        )
    }
 
}