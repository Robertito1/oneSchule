import React from 'react';
import atlantis from '../assets/atlantis.jpg'
import karmaTag from '../assets/Kamar-Taj.png'
import olympus from '../assets/olympus.jpg'
import rajnagar from '../assets/Rajnagar.jpg'
import {withRouter} from 'react-router-dom'
import '../stylesheets/carousel.css'

const Carousel = ({history}) => {
    return (
    <div id="carousel-example-2" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-2" data-slide-to="1"></li>
    <li data-target="#carousel-example-2" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view">
        <img className="d-block w-100 slide-img" src={atlantis}
          alt="First slide" onClick={()=>history.push('/atlantis')}/> 
        <div className="mask rgba-black-light"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Atlantis</h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100 slide-img" src={rajnagar}
          alt="Second slide" onClick={()=>history.push('/rajnagar')}/>
        <div className="mask rgba-black-strong"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Rajnagar</h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100 slide-img" src={olympus}
          alt="Third slide" onClick={()=>history.push('/olympus')}/>
        <div className="mask rgba-black-slight"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">Olympus</h3>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view">
        <img className="d-block w-100 slide-img" src={karmaTag}
          alt="fourth" onClick={()=>history.push('/karma-tag')}/>
        <div className="mask rgba-black-slight"></div>
      </div>
      <div className="carousel-caption">
        <h3 className="h3-responsive">kamar-Taj</h3>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> );
}
 
export default withRouter(Carousel);