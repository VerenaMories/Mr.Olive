import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoOlive from '../Images/Logo.png';
import facebook from '../Images/Facebook_Logo.png';
import twitter from '../Images/default_twitter.png';
import linkedIn from '../Images/linkedIn.png';
import instagram from '../Images/instagram-logo.jpg';

export default function Navbar() {
 function verena(){
  document.querySelector(".navbar-toggler").click();
 }
  return (
    <>
    {/* <div>
    <img src={logoOlive} alt="" className="logoOlive" />
    </div> */}
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#387c30', position:'relative', padding:'0', margin:'0'}}>
        <div className="container-fluid" >
          <div className="navbar-brand" style={{padding:'0', margin:'0'}}>
          {/* <div style={{position:'absolute', top:'0', left:'0', backgroundColor:'red', height:'20%'}}>
    <img src={logoOlive} alt="" className="logoOlive" />
    </div> */}
            <img src={logoOlive} alt="" className="logoOlive" />
        
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                <div className="dropdown">
                    <div className="dropbtn btn" style={{color:'#fff'}} onClick={verena}> Home</div>
                  
                  </div>
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                <div className="dropdown">
                    <div className="dropbtn btn"  style={{color:'#fff'}} onClick={verena}> About Us</div>
                  
                  </div>
                 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  <div className="dropdown">
                    <div className="dropbtn btn"  style={{color:'#fff'}} onClick={verena}>Products</div>
                    <div className="dropdown-content"> 
                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
  <Link to='products/productCat' style={{padding:'0'}} >  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
   Green Olive 
      </button>
    </h2></Link>  
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <Link to='products/subCategory'  className="accordionBg">Kalamata</Link>
      
    <Link to='products/subCategory1'  className="accordionBg" >Azizi</Link>
    
    <Link to='products/subCategory2'  className="accordionBg">ay haga</Link>
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <Link to='products/productCat2' style={{padding:'0'}} >
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     BLACK OLIVE
      </button>
    </h2> </Link>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <Link to='products/subCategory3'  className="accordionBg">Kalamata</Link>
    <Link to='products/subCategory4'  className="accordionBg">Azizi</Link>
    <Link to='products/subCategory5'  className="accordionBg">ay haga</Link>
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <Link to='products/productCat3' style={{padding:'0'}} >
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     OLIVE OIL
      </button>
    </h2>  </Link>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <Link to='products/subCategory6'  className="accordionBg">Olive oil brdo</Link>
    <Link to='products/subCategory7'  className="accordionBg">Olive oil 2nd</Link>
    <Link to='products/subCategory8' className="accordionBg">Olive oil 3rd</Link>
      </div>
    </div>
  </div>
</div> </div>
                    {/**----------------------------------------------- */}


                    
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="packages"> 
                <div className="dropdown">
                    <div className="dropbtn btn"  style={{color:'#fff'}} onClick={verena}>Packages</div>
                  
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="photoGallery">
                <div className="dropdown">
                    <div className="dropbtn btn"  style={{color:'#fff'}} onClick={verena}>  Photo Gallery</div>
                 
                  </div>
                
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact"> <div className="dropdown">
                    <div className="dropbtn btn"  style={{color:'#fff'}} onClick={verena}>  Contact Us</div>
                 
                  </div>
                 
                </Link>
              </li>
              {/* <li className="nav-item" style={{display:'flex' ,alignItems:'center'}}>
                <ul >
                <img src={facebook} alt="facebook logo" className="logo" />
                <img src={linkedIn} alt="linekin logo" className="logo" />
                <img src={twitter} alt="twitter logo" className="logo"/>
                <img src={instagram} alt="instagram logo" className="logo1"/>

                </ul>
               

                 </li> */}
            </ul>
          </div>
        </div>
      </nav>

 
    </>
  );
}
