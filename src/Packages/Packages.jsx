import React from 'react';
import './Packages.css';
import contact from '../Images/Group-of-customer-service-representatives.jpg'


export default function Packages() {
  return (
  <>
<div className="packages ">
        <div className="container" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
          <div className="col-md-12 " style={{display:'flex', justifyContent:'center' , alignItems:'center',height:'100%'}}>
              
            
                <div 
                style={{display:'flex', justifyContent:'center', alignContent:'center', textAlign:'center'}}
               
                >
                 
                <h1 
               
                  className="text-white"
                
                >
             PACKAGES
                </h1>
                </div>
            
              </div>
          </div>
        </div>

      </div>
      <div className="container P-4">
        <div className="row  p-4">
          <div className="col-md-3">

          </div>
          <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
            <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
            <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
        </div>
        <div className="row  p-4">
        <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
          <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
            <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
            <div className="col-md-3 ">
            <div  className=" package"> </div>
            <p style={{color:'#3db671', textAlign:'center'}}>BARREL 20 LITRS</p>
            </div>
        </div>
      
      </div>
      <div className="row"  style={{backgroundColor:'#3db671', color:'white' , margin:'0', display:'flex', justifyContent:'end'}}>
          <div className="col-md-7 col-sm-8" >
            <div className="container">
            <div className="row " >
              <div className="col-md-12" style={{display:'flex', justifyContent:'center'}}>
                <div className="contactContect" >
                <h6 > CONTACT US</h6>
           

           <p >when you have a question we're here to help</p>  
                </div>
          
              </div>
         
</div>
            </div>
           
          </div>
          <div className="col-md-1 col-sm-4" style={{ backgroundColor:'#5cd38f'}}></div>
          <div className="col-md-4 col-sm-12 " style={{padding:'0'}}>
<img src={contact} alt="" className='contactMeFooter'/>
          </div>
        </div>  </>
  )
}
