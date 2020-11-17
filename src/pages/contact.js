import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"


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
        <Layout>
    
    <div>
         <div className="col-md-8 mt-5">
            <h3>Get in Touch</h3>
            <form action="https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad" onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1" required="required">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div> 
            <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
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
      </div>  
    
  </Layout>
     
    );
  };
  
  export default Contact;