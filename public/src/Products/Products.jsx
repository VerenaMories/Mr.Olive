import React from 'react';
import './Products.css'
import { Link } from "react-router-dom";
import contact from '../Images/Group-of-customer-service-representatives.jpg'


export default function Products() {

  return (
 <>
<div className="products ">
        <div className="container" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
          <div className="col-md-12 " style={{display:'flex', justifyContent:'center' , alignItems:'center',height:'100%'}}>
              
            
              <div 
              style={{display:'flex', justifyContent:'center', alignContent:'center', textAlign:'center'}}
             
              >
               
              <h1 
             
                className="text-white"
              
              >
             PRODUCTS
              </h1>
              </div>
          
            </div>
          </div>
        </div>

      </div>
      <div className="container p-4">
       
        <div className="row p-4">
        <div className="col-md-4 ">
            <Link to='/products/productCat'> <div  className=" greenOlive"> </div> </Link> 
            <p style={{color:'#3db671', textAlign:'center'}}>GREEN OLIVE</p>
            </div>
          <div className="col-md-4 ">
          <Link to='/products/productCat2'>  <div  className=" blackOlive"> </div> </Link>  
            <p style={{color:'#3db671', textAlign:'center'}}>BLACK OLIVE</p>
            </div>
            <div className="col-md-4 ">
            <Link to='/products/productCat3'> <div  className=" oliveOil"> </div></Link>  
            <p style={{color:'#3db671', textAlign:'center'}}>OLIVE OIL</p>
            </div>
          
        </div>
     
      </div>
     
      <div className="row"  style={{backgroundColor:'#3db671', color:'white' , margin:'0', display:'flex', justifyContent:'end'}}>
          <div className="col-md-7 col-sm-8" style={{marginTop:'25px'}}>
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
