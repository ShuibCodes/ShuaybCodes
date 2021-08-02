import React from 'react';
// import  Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer';
import feed from '../images/HeroImages/feed.png'
import scatter from '../images/HeroImages/scatter.png'
import histogram from '../images/HeroImages/histogram.png'
// import {FaSpotify }from 'react-icons/fa'
// import {SiApplepodcasts }from 'react-icons/si'

// import {Link} from 'gatsby'
import  '../components/NewStyles/Resources.css'



const Webinars= () => {
    return (
        <div>
        {/* <Navbar/> */}
        <div style={{paddingLeft:"10%"}} class='container'>
  
              <div className="container">



<div className="webinar-container">
<div className="podcast-container" >
      <div className="podcast-img">
      <div>
<div class="carousel-webinar">
<ul class="slides">
<input type="radio" name="radio-buttons" id="img-1" checked />
<li class="slide-container">
<div class="slide-image">
<img src={feed}/>
</div>
<div class="carousel-webinar-controls">
  <label for="img-3" class="prev-slide">
    <span>&lsaquo;</span>
  </label>
  <label for="img-2" class="next-slide">
    <span>&rsaquo;</span>
  </label>
</div>
</li>
<input type="radio" name="radio-buttons" id="img-2" />
<li class="slide-container">
<div class="slide-image">
  <img src={histogram}/>
</div>
<div class="carousel-webinar-controls">
  <label for="img-1" class="prev-slide">
    <span>&lsaquo;</span>
  </label>
  <label for="img-3" class="next-slide">
    <span>&rsaquo;</span>
  </label>
</div>
</li>
<input type="radio" name="radio-buttons" id="img-3" />
<li class="slide-container">
<div class="slide-image">
  <img src={scatter}/>
</div>
<div class="carousel-webinar-controls">
  <label for="img-2" class="prev-slide">
    <span>&lsaquo;</span>
  </label>
  <label for="img-1" class="next-slide">
    <span>&rsaquo;</span>
  </label>
</div>
</li>
<div class="carousel-webinar-dots">
<label for="img-1" class="carousel-webinar-dot" id="img-dot-1"></label>
<label for="img-2" class="carousel-webinar-dot" id="img-dot-2"></label>
<label for="img-3" class="carousel-webinar-dot" id="img-dot-3"></label>
</div>
</ul>
</div>
</div>
      </div>

  
  </div>
</div>
      <div className="webinar-text" >
    <p className="text" >Sports nutrition, active nutrition and lifestyle nutrition is our world. It is changing, adapting, and evolving at a pace not many of us had anticipated. And we want to know more. I have learnt over the years that some of the best insight is derived through conversation.  </p>
        
</div>
    
    </div>
    
    </div>
    
    </div>


           
    );
}

export default Webinars;
