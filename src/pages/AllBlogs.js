import React, {useState} from 'react';

import '../components/NewStyles/Resources.css'
import Blog from './blog'
// import PremiumBlogs from './PremiumBlogs'


const Blogs = () => {

    const [open, setOpen] =useState(false)
    const [openPremium, setOpenPremium] =useState(false)

      

    return (
        <div>
          <div  style={{paddingLeft:"15%"}} className="blog-container">
      
            <h4 style={{textAlign:"center", padding: "20px"}}>Free to Access</h4>
   
            <Blog/>
             <button  className="show-btn" onClick={() => setOpen(!open)} >Click to Expand</button>
        <div className="card-flex" >
        
        {open ? <Blog/> : <></>}
        </div>
      
      
       </div>
        </div>
    );
}

export default Blogs;





