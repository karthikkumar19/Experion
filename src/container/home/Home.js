import React,{useState,useEffect} from 'react';
import Carosel from '../../components/carosel/Carosel';
import './home.scss';
import Cards from '../../components/card/cards';
import Button from '../../components/Button/button';
import StoryProfile from '../../components/storyProfile/storyProfile';
import profile1 from '../../assets/images/profile1.png';
import profile2 from '../../assets/images/profile2.png';
import profile3 from '../../assets/images/profile3.png';
import profile4 from '../../assets/images/profile4.png';
import Mobile from '../../components/mobile/mobile';
import appstore from '../../assets/icons/appstore.svg';
import playstore from '../../assets/icons/playstore.svg';
import Story from '../../components/Stories/Story';
import SignUp from '../../components/signUp/signUp';
import Inspirations from '../../components/inspirations/inspirations';
import LearnMoreCards from '../../components/card/learnMoreCards';
import ContactUs from '../../components/contactUs/contactUs';
import {FaTwitter,FaFacebookSquare,FaLinkedinIn,FaYoutube} from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
    const[offset,setOffset] = useState(0);
    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        Aos.init({
            duration:3000,easing: 'ease-in-out-sine'
        });
        Aos.refresh();
    },[])


    return (
        <div >

            <div>
                <Carosel/>
                </div>
                {/* header section ends */}


                <div  className=' text'>
                        <h2 >Quae quo sunt excelsiores <br/>
Dant clariora </h2>
<Cards classes=' cardContainer'/>

                    </div>

                    {/* card section ends */}
                    
                    <div className='storyDiv' >
                    <div className='layer' >
                        <div >
                        <div className='row row-header'  >
<div className='col-xl-8  col-12 col-md-7 left-sec'  style={{transform:`translateY${offset * 0.8}px`}} >
                             <h3>Lorem Ipsum  Dolor <br/>
Sit Amet</h3>
<p>At iam decimum annum in spelunca iacet. Cur tantas regiones <br/> barbarorum pedibus obiit, tot maria transmisit.</p>
                           <Button>CONTACT</Button>
                           </div>
                           <div className='col-xl-4  col-12 col-md-5 right-sec'  style={{backgroundColor:'#112733',width:'100vw'}}>
                               <h2 >
                                  Featured 
                                  Stories
                              </h2>
                              <div className='content' >
                              <StoryProfile image={profile1} text='At iam decimum annum in spelunca iacet. ' date='19 May 2020' />
                              <StoryProfile image={profile2} text='At iam decimum annum in spelunca iacet. ' date='19 May 2020' />
                              <StoryProfile image={profile3} text='At iam decimum annum in spelunca iacet. ' date='19 May 2020' />
                              <StoryProfile image={profile4} text='At iam decimum annum in spelunca iacet. ' date='19 May 2020' />
                              </div>    
                           </div>
                                </div>
             </div>
    </div>
                    </div>

                    {/* story div ends */}

            <div className='downloadDiv'>
                       
                       <div className=' download-container' >
                               <div className='mobile-container'>
                                       <Mobile/>
                               </div>
                               <div className='download  '   >
                                   <h3 >Download Our App</h3>
                                   <p>At iam decimum annum in spelunca iacet. Cur tantas <br/> regiones  barbarorum pedibus obiit, tot maria transmisit.</p>
                                   <div style={{display:'flex',justifyContent:'space-between'}} >
                                   <img src={playstore} />
                                   <img src={appstore}/>

                                   </div>
                               </div>
                       </div>
               
    </div>
            {/* download section ends */}

    <div style={{marginTop:'100px',textAlign:'center'}}>
        <div className='featured-story'>
        <h1>Featured Stories</h1>
        <p  >At iam decimum annum in spelunca iacet. Cur tantas regiones <br/> barbarorum pedibus obiit, tot maria transmisit.</p>
        </div>
        <div>
            <Story/>
        </div>
    </div>

    {/* Featured story ends */}


    <div className='signUp-section' >
    <div className='container signUp' style={{transform:`translateY${offset * 100}px`}} >
            <div className='row row-signUp' >
                    <div className=' signUp-content'  >
                            <h1>Sign Up Our <br/>
Newsletter</h1>
<p >At iam decimum annum in spelunca <br/> iacet. 
    Cur tantas regiones <br/> barbarorum pedibus obiit, tot maria transmisit.</p>
                    </div>
                    <div className=' signUp-login' >
                            <SignUp/>
                    </div>
            </div>
    </div>
    </div>

    {/* signUp section ends */}
  

    {/* inspirations */}

    <div className='container inspirations'>
    <div style={{textAlign:'center'}}>
        <h1>Inspirations</h1>
        <p >At iam decimum annum in spelunca iacet. Cur tantas regiones <br/> barbarorum pedibus obiit, tot maria transmisit.</p>
        </div>
            <Inspirations/>
    </div>

    {/* inspiration ends */}

    <div className='container learnMore'>
    <div className='learnMore_content'>
                        <h1>Lorem Ipsum <br/>
Dolor <br/>
Sit Amet</h1>
<p>At iam decimum annum in spelunca iacet. Cur <br/> tantas regiones barbarorum pedibus obiit, tot <br/> maria transmisit.</p>
<Button class='learnMore_button'>LEARN MORE</Button>
                               </div>
                               <div className='card_container'>
                                  
                                  <LearnMoreCards/>
                               </div>
                               
    </div>
    <div className='container line'>
        <hr/>
    </div>
        {/* learnMore section ends */}

    <div className='container'>
            <ContactUs/>
            <div className='social_desktop'>
            <div className='terms'>
                <p>Terms & conditions  |  Privacy Policy</p>
            </div>
            <div className='social'>
                <div  className='social_icons'>
                    <FaFacebookSquare color='#ffffff'/>
                    <FaLinkedinIn color='#ffffff'/>
                    <FaTwitter color='#ffffff'/>
                    <FaYoutube color='#ffffff'/>
                </div>
                <p>2020. All right reserved</p>
            </div>
            </div>

            {/* social mobile */}
            <div className='social_mobile'>
            <div className='social_mobile_icons'>
                    <FaFacebookSquare color='#ffffff'/>
                    <FaLinkedinIn color='#ffffff'/>
                    <FaTwitter color='#ffffff'/>
                    <FaYoutube color='#ffffff'/>
                </div>
                <p>Terms & conditions  |  Privacy Policy</p>
                <p>2020. All right reserved</p>

            </div> 
    </div>    
            </div>
           
    )
}

export default Home
