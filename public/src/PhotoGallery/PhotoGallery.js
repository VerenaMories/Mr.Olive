import React, { useEffect } from "react";
import "./PhotoGallery.css";
import image1 from "../Images/slide14.jpg";
import image2 from "../Images/slide12.jpg";
import image3 from "../Images/slide13.jpg";

export default function PhotoGallery() {
  let imgList = Array.from(document.getElementsByClassName("imgItem"));
  let lightContainer = document.querySelector(".lightContainer");
  let lightBox = document.querySelector(".lightBox");
  let currentIndex = 0;
  // console.log(lightContainer);

  function omar(x) {
    
    document
      .querySelector(".lightContainer")
      .classList.replace("d-none", "d-flex");
    // console.log("ayhagaaasa")
    document.querySelector(".lightBox").style.backgroundImage = `url(${x.src})`;
    currentIndex = x.id;
   // console.log(currentIndex)
  }


  function nextSlide() {
    currentIndex++;
    if (currentIndex ==11) {
      currentIndex = 0;
    }

    let imgSrc = document
      .getElementById(JSON.stringify(currentIndex))
      .getAttribute("src");
    document.querySelector(
      ".lightBox"
    ).style.backgroundImage = `url(${imgSrc})`;
  }

  {
    /*--------------------------------------- L button bta3 l prev-----------------------------*/
  }

  function prevSlide() {
   console.log(currentIndex)
    if (currentIndex == 0) {
      currentIndex = 11;
    }
    currentIndex--;
    let imgSrc = document
      .getElementById(JSON.stringify(currentIndex))
      .getAttribute("src");
    document.querySelector(
      ".lightBox"
    ).style.backgroundImage = `url(${imgSrc})`;
  }
  {
    /*--------------------------------------- L button bta3 l close-----------------------------*/
  }

  function closeSlide() {
    document
      .querySelector(".lightContainer")
      .classList.replace("d-flex", "d-none");
  }
  {
    /*--------------------------------------- L button bta3 l next-----------------------------*/
  }

  return (
    <>
      <div className="gallery ">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white">hahot hena l navbar</h4>
            </div>
            <div className="col-md-8 ">
              <div
                style={{
                  backgroundColor: "#0008",
                  width: "150px",
                  height: "50px",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div>
                        <i
                          class="fa-solid fa-earth-americas"
                          style={{ position: "absolute", top: "25px" }}
                        ></i>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div>
                        <i
                          class="fa-solid fa-earth-americas"
                          style={{ position: "absolute", top: "25px" }}
                        ></i>
                      </div>
                    </div>{" "}
                    <div className="col-md-3">
                      <div>
                        <i
                          class="fa-solid fa-earth-americas"
                          style={{ position: "absolute", top: "25px" }}
                        ></i>
                      </div>
                    </div>{" "}
                    <div className="col-md-3">
                      <div>
                        <i
                          class="fa-solid fa-earth-americas"
                          style={{ position: "absolute", top: "25px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <h1
                  style={{ position: "absolute", top: "130px", left: "230px" }}
                  className="text-white"
                >
                  PHOTO GALLERY
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <div className="row p-4 ">
          <div className="col-md-3 "></div>
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              <img
                id="0"
                src={image1}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className=" imgItem">
              <img
                id="1"
                src={image2}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              <img
                id="2"
                src={image3}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
        </div>
        <div className="row  p-4">
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              <img
                id="3"
                src={image1}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className=" imgItem">
              <img
                id="4"
                src={image2}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              <img
                id="5"
                src={image3}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className=" imgItem">
              <img
                id="6"
                src={image1}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
        </div>
        <div className="row  p-4">
          <div className="col-md-3 photoContainer">
            <div className=" imgItem">
              {" "}
              <img
                id="7"
                src={image2}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              {" "}
              <img
                id="8"
                src={image3}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className="  imgItem">
              {" "}
              <img
                id="9"
                src={image1}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
          <div className="col-md-3 photoContainer">
            <div className=" imgItem">
              {" "}
              <img
                id="10"
                src={image2}
                onClick={(e) => omar(e.target)}
                alt="image not found"
                className="photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lightContainer d-none justify-content-center align-items-center">
        <div className="lightBox d-flex justify-content-between align-items-center ">
          {/* <img src={image1} alt="image not found" className='lightBox'/> */}
<div className="buttonContainer" onClick={prevSlide}>
<i className="fa-solid fa-chevron-left" ></i>
</div>
<i style={{color:'red'}}
            id="close"
            className="fa-solid fa-xmark"
            onClick={closeSlide}
          ></i>
   
          
          <div className="buttonContainer"   onClick={nextSlide}>  <i
            className="fa-solid fa-chevron-right"
          
           
          ></i></div>
        
        </div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#3db671",
          color: "white",
          margin: "0",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div className="col-md-7">
          <div
            className="row "
            style={{ display: "flex", justifyContent: "center" }}
          >
            CONTACT US
          </div>
          <div
            className="row "
            style={{ display: "flex", justifyContent: "center" }}
          >
            when you have a question we're here to help
          </div>
        </div>
        <div className="col-md-1" style={{ backgroundColor: "#5cd38f" }}></div>
        <div className="col-md-4 contactMe"></div>
      </div>
    </>
  );
}
