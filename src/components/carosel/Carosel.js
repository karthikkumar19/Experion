import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carosel.scss';
import Button from '../Button/button';
import image1 from '../../assets/images/expCarosel.png';
import thumb from '../../assets/images/thumb.png';
import Search from '../search/Search'
import {FaFacebookF,FaTwitter} from 'react-icons/fa';
import story from '../../assets/images/story.png';
import story1 from '../../assets/images/story1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class Carosel extends Component {

  componentDidMount(){
    Aos.init({
      // initialise with other settings
      duration : 1500
    });
  }
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
       <div className='slider-container'>
           <div className='header'>
             <span className='social-header'>
                <FaFacebookF color='#ffffff'/>
                <FaTwitter color='#ffffff' />
             </span>
           <h3>MARVEL</h3>
        <span className='header-line' >
          <hr></hr>
          <hr></hr>
        </span>
        </div>
        <div>
        <div data-aos="fade-up-right" className="header-content">
        <h1>
  Lorem Ipsum <br/>
  Dolor sit Amet
</h1>
          <h6>
          At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? 
          Duarum enim vitarum nobis erunt instituta capienda. Fortasse id optimum, sed ubi illud: Plus semper voluptatis
          </h6>
          <div className='button-container'>
            <Button>CONTACT</Button>
          </div>
        </div>
      
           </div>
        
        
       <Slider ref={c => (this.slider = c)} {...settings}>
          <div className='slider-div'>
            <img  src={image1} />
            <span className='container'>
              <Search image={thumb} next={() => this.next()} prev={() => this.previous()}/>
             
            </span>
          </div>
          <div className='slider-div'>
            <img  src={story} />
            <span className='container'>
              <Search image={thumb} next={() => this.next()}/>
             
            </span>
          </div>
          <div className='slider-div'>
            <img  src={story1} />
            <span className='container'>
              <Search image={thumb} next={() => this.next()}/>
             
            </span>
          </div>
        </Slider>
       </div>
      </>
    );
  }
}
