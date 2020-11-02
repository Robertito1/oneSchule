import React from 'react';
import '../stylesheets/hero.css'

const Hero = ({image}) => {
    return ( <div className='hero'>
        <img src={image} alt='hero' className='heroImage'/>
    </div> );
}
 
export default Hero;