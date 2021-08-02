import React, {useState} from "react"
import Navbar from '../components/Header'
import '../components/NewStyles/Resources.css'
import Webinars from './Webinars'
import Podcast from './Podcast'
import Blogs from '../pages/AllBlogs'
import {FaPodcast} from 'react-icons/fa'
import {IoMdText} from 'react-icons/io'
import {FaVideo} from 'react-icons/fa'
const items = [
     { 
       name: <div style={{display:"flex"}}  >
       <IoMdText/>
       <h4 style={{position:"relative", bottom:"6px", left:"10px"}}>Blogs</h4>
       </div>,
       content: <Blogs />,
   
     },
     { 
       name:
       <div style={{display:"flex"}} >
         <FaVideo/>
       <h4 style={{position:"relative", bottom:"16px", left:"10px"}} >Webinar</h4>
       </div>,
       content: <Webinars/>,
      
     },
     { 
       name: 
       <div style={{display:"flex"}}>
       <FaPodcast/>
       <h4 style={{position:"relative", bottom:"16px", left:"10px"}} >Podcasts</h4>
   
       </div>,
       content: <Podcast/>,
      
     },
   
   ]
   
     const AccordionSingle = ({name, content, icon}) => {
       const [isOpen, setOpen] = useState(false);
   
       
   
       return (
         <div className="accordion-wrapper">
           
           <div
          
             className={`accordion-title ${isOpen ? "open" : ""}`}
             onClick={() => setOpen(!isOpen)}>
             
             {name}
           </div>
           <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
             <div className="accordion-content">{content}</div>
           </div>
         </div>
       );
     };
   

const Contact = () => {
    
   return(
      <>
      <Navbar/>
      <div >
      <div  >{items.map(d => AccordionSingle(d))}</div>
      </div>

        
      
       
       
        </>
   )
           
}
  
  export default Contact;
