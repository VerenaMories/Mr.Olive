import React from 'react';
import './Products.css';
import { Link } from "react-router-dom";
import contact from '../Images/Group-of-customer-service-representatives.jpg'

export default function ProductCat2() {
  return (
    <>
    <div className="products ">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {/* <h4 className="text-white">hahot hena l navbar</h4> */}
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
             BLACK Olive
                    </h1>
                    </div>
                
                  </div>
              </div>
            </div>
    
          </div>
          <div className="container p-4">
          
            <div className="row p-4">
            <div className="col-md-4 ">
               <Link to='/products/subCategory3'> <div  className=" blackOlive"> </div> </Link> 
                <p style={{color:'#3db671', textAlign:'center'}}>KALAMATA OLIVE</p>
                </div>
              <div className="col-md-4 ">
          <Link to='/products/subCategory4'>      <div  className=" blackOlive"> </div></Link> 
                <p style={{color:'#3db671', textAlign:'center'}}>AZIZI OLIVE</p>
                </div>
                <div className="col-md-4 ">
                <Link to='/products/subCategory5' > <div  className=" blackOlive"> </div> </Link> 
                <p style={{color:'#3db671', textAlign:'center'}}>AY HAGA OLIVE</p>
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
        </div>
     </>
  )
}
