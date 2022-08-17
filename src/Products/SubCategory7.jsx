import React from 'react';
import image1 from "../Images/slide12.jpg";
import image2 from "../Images/slide11.jpg";
import image3 from "../Images/slide14.jpg";
import contact from '../Images/Group-of-customer-service-representatives.jpg'
import axios from 'axios';

export default function SubCategory7() {
  async function postQuote(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var productName=document.querySelector('.productName').innerHTML;

   

console.log(productName)
  
    var formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
  formdata.append('productName', productName )

    // formdata.append('image',   image.file)
  
    await axios({
      method: "post",
      url:    `https://zatun.herokuapp.com/add_quote`,
  data:formdata,
  headers:{ "Content-Type": "multipart/form-data" }})
  window.location.reload();
  }
  let imgList = Array.from(document.getElementsByClassName("imgItem"));
  let lightContainer = document.querySelector(".lightContainer");
  let lightBox = document.querySelector(".lightBox");
  let currentIndex = 0;
  console.log(lightContainer);

  function showImage(x) {
    
    document
      .querySelector(".lightContainer2")
      .classList.replace("d-none", "d-flex");
    // console.log("ayhagaaasa")
    document.querySelector(".very").style.backgroundImage = `url(${x.src})`;
    document.querySelector(".productName").innerHTML  = x.name;

    currentIndex = x.id;
   // console.log(currentIndex)
  }

  function closeSlide() {
    document
      .querySelector(".lightContainer2")
      .classList.replace("d-flex", "d-none");
  }
  function showForm(){
    document
    .querySelector(".showForm")
    .classList.replace("d-none", "d-inline-block");
   }
  return (
    <>
    <div className="products " onClick={closeSlide}>
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
             OLIVE OIL
                    </h1>
                    </div>
                
                  </div>
              </div>
            </div>
    
          </div>
          <div className="container p-4">
          
          <div className="row p-4">
            <div className="col-md-4 photoContainer2">
            <div className="  imgItem">
              <img
                id="3"
                src={image1}
                onClick={(e) => showImage
              (e.target)}
                alt="image not found"
                className="photo"
                name='SLICED RED JALAPENO'

              />
            </div>
            <p style={{color:'#3db671', textAlign:'center'}}>SLICED RED JALAPENO</p>
          </div>
          <div className="col-md-4 photoContainer2">
            <div className="  imgItem">
              <img
                id="3"
                src={image2}
                onClick={(e) => showImage
              (e.target)}
                alt="image not found"
                className="photo"
                name="PICKLED CUCUMBER"

              />
            </div>
            <p style={{color:'#3db671', textAlign:'center'}}>PICKLED CUCUMBER</p>

          </div>
          <div className="col-md-4 photoContainer2">
            <div className="  imgItem">
              <img
                id="3"
                src={image3}
                onClick={(e) => showImage
              (e.target)}
                alt="image not found"
                className="photo"
                name="PITTED-MANZALILLA"

              />
            </div>
            <p style={{color:'#3db671', textAlign:'center'}}>PITTED-MANZALILLA</p>

          </div>
               
            </div>
         
          </div>
          <div className="lightContainer2 d-none  align-items-center">
        <div className="lightBox2  ">
          {/* <img src={image1} alt="image not found" className='lightBox'/> */}
          <div className="container">
            <div className="row d-flex justify-content-center">
              <img className=" very"  alt="" style={{padding:'0', marginTop:'6rem'}}/>
            <h4 className='productName' style={{color:'#3db671' , paddingTop:'4rem'}}></h4>
<p style={{color:'#fff'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt nam cupiditate illum architecto hic odit, dolore unde assumenda earum facere, dolorum voluptatibus totam porro incidunt dicta et aut aliquam.</p>
<p style={{color:'#fff'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nostrum maxime dicta facere odit non voluptatem nesciunt necessitatibus quam totam.</p>
<button className='btn get' style={{marginTop:'1rem'}}   onClick={showForm}>Get Quote</button>
<div className='showForm d-none' style={{marginTop:'30px'}}>
<input
                type="text"
                className="form-control"
                id="name"
                placeholder='Enter Your Name'
                style={{marginBottom:'30px'}}
              />
               <input
                type="email"
                className="form-control"
                // id="exampleFormControlInput2"
                id='email'
                placeholder='Enter Your Email'
              />
              <button className='btn get' style={{marginTop:'1rem'}} onClick={postQuote}>Submit</button>
</div>
            </div>
          </div>

<i style={{color:'black' , backgroundColor:'white', padding:'10px'}}
            id="close"
            className="fa-solid fa-xmark"
            onClick={closeSlide}
          ></i>
   
          
          
        
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
