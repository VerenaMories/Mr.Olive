import React from 'react';
import './AboutUs.css';
import contact from '../Images/Group-of-customer-service-representatives.jpg'

export default function AboutUs() {
  return (
<>
<div className="aboutUs ">
        <div className="container" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
          
            <div className="col-md-12 " style={{display:'flex', justifyContent:'center' , alignItems:'center',height:'100%'}}>
              
              {/* <div style={{backgroundColor:'#0008', width:'150px', height:'50px', position:'relative', borderRadius:'10px'}}>
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
                  </div> */}
                <div 
                style={{display:'flex', justifyContent:'center', alignContent:'center', textAlign:'center'}}
                // style={{position:'relative'}}
                >
                 
                <h1 
                // style={{position:'absolute' , top:'130px', left:'230px'}}
                  className="text-white"
                
                >
                ABOUT US
                </h1>
                </div>
            
              </div>
          </div>
        </div>

      </div>
      <div className="container p-3">
        <div className="row p-3">
          <div className="col-md-8">
<h4 style={{color:'#3db671'}}>AGRICULTURE FIELD:</h4>
<br/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro a consectetur voluptatibus tempora quos aliquid perferendis corrupti fugiat esse non ex eaque fugit veniam iste doloribus optio ea, tempore molestiae voluptatum praesentium. Obcaecati ratione optio ex repellat corrupti in excepturi aliquam dolore nesciunt iure, facere consequatur voluptate quas sint recusandae nam natus magni itaque numquam tempora officiis perferendis. Quod, inventore atque! Molestias, cupiditate corrupti assumenda culpa quas totam? Voluptatem reprehenderit impedit fugiat eum eius cum? Dolorem sunt fuga excepturi vitae impedit recusandae eaque. Assumenda ullam unde adipisci facere nihil consectetur sint laboriosam, mollitia eveniet minus, laudantium excepturi laborum placeat.

</p>
<h4 style={{color:'#3db671'}}>PRODUCTION FIELD:</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio assumenda voluptates harum eaque exercitationem nihil, quos officia tenetur odit vel! Ratione quos sed quas veniam nulla odio deserunt totam molestiae repellendus dolores culpa iusto aut obcaecati aspernatur unde laborum ut rerum saepe illo sint, vel quo nobis dignissimos? Ullam.</p>

          </div>
          <div className="col-md-4 oliveOil">

          </div>
        </div>
      </div>
      <div className="row"  style={{backgroundColor:'#3db671', color:'white' , margin:'0', display:'flex', justifyContent:'end'}}>
          <div className="col-md-7 col-sm-8" style={{marginTop:'25px'}} >
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
