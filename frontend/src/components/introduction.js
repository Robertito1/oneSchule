import React, {useEffect} from 'react';
import image from '../assets/pexels-anastasiya-gepp-1462630.jpg'
import '../stylesheets/introduction.css'
import AOS from "aos";



const Introduction = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
    <div className='d-flex flex-column flex-md-row justify-content-between intro-container'>
        <div className='col intro-text text-center order-2 order-md-1' data-aos="fade-up">
        <p id='headerText'>Finds Schools in wakanda</p>
              <p className='writeUp'><span id='fancyText'>OneSchule</span> provides all the information you'll need about Universities and Colleges in wakanda
              all in one place, makes comparing and finding the right College for you easier and much faster!!
              </p>  
        </div>
        <div className='col picture-container order-1 order-md-2' data-aos="fade-up">
           <img src={image} alt='anastasia' className='picture'/>
        </div>
    </div>
 );
}
 
export default Introduction;