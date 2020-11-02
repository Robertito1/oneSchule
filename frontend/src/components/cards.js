import React, {useEffect} from 'react';
import '../stylesheets/cards.css'
import icon2 from '../assets/icons8-bar-chart-160.png'
import icon from '../assets/icons8-search-512.png'
import icon3 from '../assets/icons8-graduation-cap-96.png'
import AOS from "aos";



const Cards = () => {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return ( <div className='card-deck d-flex flex-column flex-md-row justify-content-center'>
         <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
                <h5 className="card-title mb-2 text-center">Search For Universities and Colleges</h5> 
                <img className='card-icons' src={icon}  alt='icon'/>
            </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="400">
            <div className="card-body">
                <h5 className="card-title mb-2 text-center">Find list of all Students</h5>
                <img className='card-icons' src={icon3}  alt='icon'/>
            </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="600">
            <div className="card-body">
                <h5 className="card-title mb-2 text-center">Analyze Schools by their location</h5>
                <img className='card-icons' src={icon2}  alt='icon'/>
            </div>
        </div>
    </div> );
}
 
export default Cards;