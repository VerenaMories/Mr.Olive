import React from "react";
// import logo from '../Images/2108';
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white text-center  p-2 bottom-0 start-0 end-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 "> <div className="row ">  <p style={{display:'flex'}}> Find us on facebook</p></div>
            <div className="row"> <p style={{display:'contents'}}> hahot hna sora lma ydos 3leha twdeh l page bta3t l fb
              </p></div>
              {/* <img src="" className='w-100' alt="Italian Trulli"/> */}
              {/* <img src={logo} alt="Logo" /> */}
            </div>
            <div className="col-md-4">
              <div className="row"> <p  style={{display:'flex'}}>Contact us</p> </div>
              <div className="row"><p  style={{display:'contents'}}>address: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  </div>
              <div className="row"><p style={{display:'contents'}}>Email: elramly.ee@gmail.com</p> </div>
              <div className="row"><p style={{display:'contents'}}>Export Coordinator: 0022203203984746</p> </div>
              <div className="row"><p style={{display:'contents'}}>General Manager: Hamada saad abdel rezt Tel:0100000003444</p> </div>
              <div className="row"><p style={{display:'contents'}}>Chairman: Ahmed Rabee Abdel ehhhe Tel:000222030303033</p> </div>

              </div>
            <div className="col-md-4"> <div className="row"> <p style={{display:'flex'}}>Our Location on map</p> </div> <div className="row"> <iframe className="mapFooter"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.74377986197!2d31.343619515592003!3d30.07287802418277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815f8139c47a3%3A0xc1744516bae86a18!2sCitystars%20Heliopolis!5e0!3m2!1sen!2seg!4v1660126680078!5m2!1sen!2seg"
             
            ></iframe></div> 
            
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}
