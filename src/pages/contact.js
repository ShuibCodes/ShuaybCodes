import React, { useState }  from "react"
import axios from "axios";
import Map from '../pages/Map.js'
import  FooterLayout from '../components/Layouts/BlogLayout'
import {Helmet} from 'react-helmet'
import '../pages/custom.scss'

const Contact = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false, 
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <FooterLayout>
        <Helmet title="Contact" />
    <div className="background">
    <div className="form">
         <div className=" form col-md-8 mt-5">
            <h3 className="title" >Get in Touch</h3>
            <form action="https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad" onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1" required="required">Email address <input type="email" name="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required="required"/></label>
                <label for="exampleInputName" >Name  <input type="text" name="name"  className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/> </label>
                <label for="exampleInputName" >Message <input type="text" name="name"  className="form-control" className="message" id="exampleInputName" placeholder="Type Your Message" /> </label>
            </div> 
          
                
               
         
            
            <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
                Submit
            </button>
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
        </div>
        <div className="contact-container">
          <div className="contact-details">
               <p> <span className="prompt" >Address: </span>200 Smiths Close , London, N22 5FL </p>
                <p><span className="prompt" >Telephone: </span>0208115563 </p>
                <p><span className="prompt" >FAX: </span>0300554977 </p>
                <p><span className="prompt" >Email: </span>info@example.co.uk</p>
                <p><span className="prompt" >PO BOX:
                 </span>P.O.Box 124, Lords Lane 211b </p>
          </div>
        </div>
      </div>  
    </div>
   
        <Map />
      
      </FooterLayout>
     
    );
  };
  
  export default Contact;
