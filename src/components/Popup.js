import React, {useState} from 'react'
import N from '../images/transparent-logo.png'
import {RiCloseFill }from 'react-icons/ri'
import './popup.css'
import '../components/contact.scss'
import { IconContext } from 'react-icons/lib'
 function PopUp(props) {


    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup-inner">
        <div className="contact-container">
       <IconContext.Provider  value={{size:"25px"}}>
         <RiCloseFill onClick={() => props.setTrigger(false)}  style={{ position:"relative", left:"30rem"}}/>
       </IconContext.Provider>
  <div className="row header">
      <img className="logo" src={N} alt="N-svg"></img>
    <h4 className="form-title">Contact Us</h4>
  </div>
  <div className="row body">
    <form action="#">
      <ul className="ul">
        
        <li>
          <p className="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="John" />
          </p>
          <p className="pull-right">
            <label for="last_name">last name</label>
            <input type="text" name="last_name" placeholder="Smith" />      
          </p>
        </li>
        
        <li>
          <p className="p" >
            <label  for="email">email</label>
            <input required="true" type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li><div className="divider"></div></li>
        <li>
          <label for="comments">Message</label>
          <textarea cols="46" rows="3" name="comments"></textarea>
        </li>
        
        <li>
     
          {/* <small>or press <strong>enter</strong></small> */}
        </li>
        <input onClick={() => props.setTrigger(false)} className="btn btn-submit" type="Submit" value="Submit" />
      </ul>
    </form>  
  </div>
</div>

            </div>
            
        </div>
    ) : "";
}

export default PopUp