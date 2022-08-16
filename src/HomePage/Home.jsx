import React from "react";
// import background from "../slide10.png";
import "./Home.css";
import contact from '../Images/Group-of-customer-service-representatives.jpg'
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className="settings-close ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white"></h4>
            </div>
            <div className="col-md-8" style={{ position: "relative" }}>
             <div>
             <div
                style={{
                  backgroundColor: "white",
                  width: "3%",
                  height: "600%",
                  position: "absolute",
                  top: "250px",
                  right: "880px",
                  borderRadius: "35px",
                }}
              >
                {" "}
                <div
                  style={{
                    backgroundColor: "brown",
                    width: "22%",
                    height: "25%",
                    position: "absolute",
                    top: "18px",
                    right: "13px",
                    borderRadius: "70px",
                  }}
                ></div>{" "}
              </div>{" "}
              <h1
                className="text-white"
                style={{ position: "absolute", top: "250px" }}
              >
                MR.OLIVE FOR FOOD INDUSTRY
              </h1>
             </div>
             <div>
             <div
                style={{
                  marginTop: "15px",
                  backgroundColor: "white",
                  width: "3%",
                  height: "600%",
                  position: "absolute",
                  top: "300px",
                  right: "880px",
                  borderRadius: "35px",
                }}
              >
                {" "}
                <div
                  style={{
                    backgroundColor: "brown",
                    width: "22%",
                    height: "25%",
                    position: "absolute",
                    top: "18px",
                    right: "13px",
                    borderRadius: "70px",
                  }}
                ></div>
              </div>{" "}
              <p
                className="text-white"
                style={{
                  marginTop: "20px",
                  position: "absolute",
                  top: "300px",
                }}
              >
                THE BEST CHOICE FOR YOUR FAMILY'S HEALTH
              </p>
             </div>
           
            </div>
          </div>
        </div>
      </div>
      <div className="container  " style={{paddingTop:'50px'}}>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h2 style={{ color: "#d48a1c" }}>MR.OLIVE
            <br />
             FOR THE
             <br />
              FOOD 
              <br />
              INDUSTRY</h2>
            <button className="btn " style={{ backgroundColor: '#3db671',color:'white', width: '60%', marginTop:'70px'}}>READ MORE <i className="fa-solid fa-angle-right"></i></button>
          </div>
          <div className="col-md-4 col-sm-12">
            <div
              style={{
                backgroundColor: "#3db671",
                color: "white",
              
              }}
              className="p-2"
            >
              The company was founded in 2004 in the field of producing and
              processing olives and pickles of all kinds The Company began to
              cultivate table olives and began to expand the cultivation of
              Picual, Manzanilla, Azizi and Kalamata. <br /> In 2006, the
              company has had a major development in the factory's olive
              plantation, 80 km from Cairo to Egypt Alexandria Desert Road. It
              also planted 30 hectares of olives in 2010 and doubled to 200
              hectares in 2012, the company established 100 hectares of organic
              olive plantations
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="olive"></div>
          </div>
        </div>
      </div>
      <div className="container" style={{paddingTop:'50px',paddingBottom:'50px'}}>
        <div className="row p-3" style={{display:'flex' , justifyContent:'space-between'}}>
        
        <div
            className="col-md-3 col-sm-4"
            style={{
              backgroundColor: "#e1e1e3",
              borderRadius: "50px",
              padding: "5px",
              boxShadow: "3px 3px gray",
            }}
          ><Link to='/products' style={{textDecoration:'none'}}> 
            <div className="container m-1">
            <div className="row">
              <div
                className="col-md-4 olive1"
                style={{ display: "inline-block" }}
              ></div>
              <div
                className="col-md-4 text-bolder"
                style={{ color: "#3db671", display: "flex" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  PRODUCTS
                </div>
              </div>
            </div>
            </div>
            </Link> 
          </div> 
          <div
            className="col-md-3 col-sm-4"
            style={{
              backgroundColor: "#e1e1e3",
              borderRadius: "50px",
              padding: "5px",
              boxShadow: "3px 3px gray",
            }}
          ><Link to='/packages' style={{textDecoration:'none'}}>
            <div className="container m-1">
              <div className="row">
              <div
              className="col-md-4 olive2"
              style={{ display: "inline-block" }}
            ></div>
            <div
              className="col-md-4 text-bolder"
              style={{ color: "#3db671", display: "flex" }}
            >
              <div style={{ display: "flex", justifyContent: "center"  , alignItems:'center' , textAlign:'center'}}>
                PACKAGES
              </div>
            </div>
              </div>
            </div>
            </Link>
          </div> 
         <div
            className="col-md-3 col-sm-4"
            style={{
              backgroundColor: "#e1e1e3",
              borderRadius: "50px",
              padding: "5px",
              boxShadow: "3px 3px gray",
            }}
          ><Link to='/photoGallery' style={{textDecoration:'none'}}>
            <div className="container m-1">
              <div className="row">
              <div
              className="col-md-4 olive3"
              style={{ display: "inline-block" }}
            ></div>
            <div
              className="col-md-4 text-bolder"
              style={{ color: "#3db671", display: "flex" }}
            >
              <div style={{ display: "flex", justifyContent: "center" , alignItems:'center' , textAlign:'center'}}>
                PHOTOGALLERY
              </div>
            </div>
              </div>
            </div>
            </Link> 
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
  );
}
