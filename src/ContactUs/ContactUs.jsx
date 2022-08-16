import React from "react";
import "./ContactUs.css";
import axios from 'axios';


export default function ContactUs() {

  async function postContact(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value;


  
    var formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('subject', subject);
    formdata.append('message', message);

    // formdata.append('image',   image.file)
  
    await axios({
      method: "post",
      url:    `http://192.168.1.162:5000/add_contact_us`,
  data:formdata,
  headers:{ "Content-Type": "multipart/form-data" }})
  window.location.reload();
  }

  return (
    <>
      <div className="contact ">
        <div className="container"  style={{height:'100%'}}>
          <div className="row"  style={{height:'100%'}}>
          <div className="col-md-12 " style={{display:'flex', justifyContent:'center' , alignItems:'center',height:'100%'}}>
              
            
                <div 
                style={{display:'flex', justifyContent:'center', alignContent:'center', textAlign:'center'}}
               
                >
                 
                <h1 
               
                  className="text-white"
                
                >
                CONTACT US
                </h1>
                </div>
            
              </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9 ">
            <p className="space text-muted">
           The company was founded in 2004 in the field of producing and processing olives and pickles of all kinds. <br/>
           The Company began to cultivate table olives and began to expand the cultivation of Picual, Manzanilla, Azizi and Kalamata. <br/> In 2006, the company has had a major development in the factory's olive plantation, 80 km from Cairo to Egypt Alexandria Desert Road.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-3">
            <div className="mb-3">
              <label for="name" className="form-label" >
                Your Name ( Required )
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label" >
                Your email ( Required )
              </label>
              <input
                type="email"
                className="form-control"
                // id="exampleFormControlInput2"
                id='email'
              />
            </div>{" "}
            <div className="mb-3">
              <label for="subject" className="form-label" >
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                // id="exampleFormControlInput3"
                id="subject"
              />
            </div>
            <div className="mb-3">
              <label for="message" className="form-label" >
                Your Message
              </label>
              <textarea
                className="form-control"
                // id="exampleFormControlTextarea1"
                rows="10"
                id="message"
              ></textarea>
            </div>
        <div className="buttonContainer1">
        <button type="button" className="btn send" onClick={postContact}>
              SEND NOW
            </button>
        </div>
          </div>
          <div className="col-md-6  p-3">
            <div className="row">
              <div className="contactUs"></div>
            </div>
            <div className="row">
              <div>
                <p className="text-muted">
                  Address: Alex desert road./kilo 84/ El khatatba
                  entrance./pha-.raohs./Menufeya
                </p>

                <p  className="text-muted">Information: Info@mr-olive.com</p>

                <p  className="text-muted">Export and sales manager: Whatsapp:00201122083420</p>

                <p  className="text-muted">call Number: 00201122083420 Email:M.gamal@mr-olive.com</p>

                <p  className="text-muted">Export &sales Specialist: 00201122083420</p>

                <p  className="text-muted">General Manager: Hamada saad Abd Elrazek</p>

                <p  className="text-muted">Tel: 00201122083420</p>

                <p  className="text-muted">Chairman: Ahmed Rabee Abd Elrazek</p>

                <p  className="text-muted">Tel: 00201122083420</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-3">
        <div className="row">
          
            <iframe className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.74377986197!2d31.343619515592003!3d30.07287802418277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8139c47a3%3A0xc1744516bae86a18!2sCitystars%20Heliopolis!5e0!3m2!1sen!2seg!4v1660126680078!5m2!1sen!2seg"
             
            ></iframe>
        
        </div>
      </div>
    </>
  );
}
