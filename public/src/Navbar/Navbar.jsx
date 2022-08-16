import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:'#0DB159'}}>
          MR.OLIVE
          </a>
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
                    <div className="dropbtn btn"> Home</div>
                  
                  </div>
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                <div className="dropdown">
                    <div className="dropbtn btn"> About Us</div>
                  
                  </div>
                 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  <div className="dropdown">
                    <div className="dropbtn btn">Products</div>
                    <div className="dropdown-content">
                    <div className="dropdown">
                    <Link to='productCat'> <button className="btn  dropdown-toggle" style={{color:'#0DB159'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   GREEN OLIVE
  </button></Link> 
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#" >kalamata</a></li>
    <li><a className="dropdown-item" href="#">azizi</a></li>
    <li><a className="dropdown-item" href="#">ay no3 zaton</a></li>
  </ul>
</div>
<div className="dropdown">
  <button className="btn  dropdown-toggle" style={{color:'#0DB159'}} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  BLACK OLIVE
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item" href="#">ay no3 zaton</a></li>
    <li><a className="dropdown-item" href="#">azizi</a></li>
    <li><a className="dropdown-item" href="#">kalamata</a></li>
  </ul>
</div>
<div className="dropdown">
  <button className="btn  dropdown-toggle" style={{color:'#0DB159'}} type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
  OLIVE OIL
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
    <li><a className="dropdown-item" href="#">azizi</a></li>
    <li><a className="dropdown-item" href="#">ay no3 zaton</a></li>
    <li><a className="dropdown-item" href="#">kalamata</a></li>
  </ul>
</div>    
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="packages"> 
                <div className="dropdown">
                    <div className="dropbtn btn">Packages</div>
                  
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="photoGallery">
                <div className="dropdown">
                    <div className="dropbtn btn">  Photo Gallery</div>
                 
                  </div>
                
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact"> <div className="dropdown">
                    <div className="dropbtn btn">  Contact Us</div>
                 
                  </div>
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/**--------------------------------------------- */}
      {/* <div style={{height:'400px', width:'200px'}}>
<div className='row h-100vh'>
<div className='marc'>
hello
</div>
</div>
<div className='row'>
<ul className=" mb-2 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="packages">Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="photoGallery">Photo Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">Contact Us</Link>
        </li>
       
       
      </ul>
</div>
</div> */}
    </>
  );
}
