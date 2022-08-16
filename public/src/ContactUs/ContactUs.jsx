import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <div className="contact ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white">hahot hena l navbar</h4>
            </div>
            <div className="col-md-8 ">
              
            <div style={{backgroundColor:'#0008', width:'150px', height:'50px', position:'relative', borderRadius:'10px'}}>
<div className="container">
  <div className="row">
    <div className="col-md-3">
      <div  >
   <i class="fa-solid fa-earth-americas" style={{position:'absolute' , top:'25px'}}></i>
      </div>
    </div>
    <div className="col-md-3" >
      <div >
   <i class="fa-solid fa-earth-americas" style={{position:'absolute' , top:'25px'}}></i>
      </div>
    </div> <div className="col-md-3">
      <div >
   <i class="fa-solid fa-earth-americas" style={{position:'absolute' , top:'25px'}}></i>
      </div>
    </div> <div className="col-md-3">
      <div >
   <i class="fa-solid fa-earth-americas" style={{position:'absolute' , top:'25px'}}></i>
      </div>
    </div>
  </div>
</div>
                </div>
              <div style={{position:'relative'}}>
               
              <h1 style={{position:'absolute' , top:'130px', left:'230px'}}
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
              <label for="exampleFormControlInput1" className="form-label">
                Your Name ( Required )
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">
                Your Name ( Required )
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
              />
            </div>{" "}
            <div className="mb-3">
              <label for="exampleFormControlInput3" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
        <div className="buttonContainer1">
        <button type="button" className="btn send">
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
