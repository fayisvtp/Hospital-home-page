import React from "react";
import { FaPlayCircle } from "react-icons/fa";  
import doctor from "../Assets/doctors.png"
function Mainbar() {
  return (
    <>
    <div className="mainBar">
      <div className="row flex-column-reverse flex-md-row p-3">
        <div className="col-md-7 d-flex align-items-center ">
          <div className="heading_text col-12 p-5">
            <h1
              className="heading d-flex text-light align-items-center "
              style={{ fontSize: "80px" }}
            >
              Lorem Ipsum <br />
              dummy text 
            </h1>
            <p className="heding_para text-light">
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. 
            </p>
            <div className="play_button ">
            <div className="heading_btn">
                <p className="experience px-2">
                <span className="arrow_btn text-light  ">
                  <FaPlayCircle  />
                  </span> 
                  <span className="heading_btn-1 text-light">see our experience</span>
         
                </p>
              </div>
            </div>
          </div>
        </div> <div className="col-md-5 d-flex justify-content-end align-items-end">
          <div className="col-12 ">
            <img className="doctor img-fluid  " src={doctor} alt="doctor" />
          </div>
        </div>
      </div>
     
    </div>

    
    <div className="small_cards d-flex flex-wrap justify-content-center align-items-center col-12 p-0">
  <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center  p-0">
    <div className="col p-2 rounded-9" style={{ backgroundColor: "#EBF4FB" }}>
      <h1 className="smallcardh1">30+</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
  
  <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center p-0">
    <div className="col p-2 rounded-9" style={{ backgroundColor: "#EBF4FB" }}>
      <h1 className="smallcardh1">99%</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
  
  <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center  p-0">
    <div className="col p-2 rounded-9" style={{ backgroundColor: "#EBF4FB" }}>
      <h1 className="smallcardh1">700 +</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
  
  <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center  p-0">
    <div className="col p-2 rounded-9" style={{ backgroundColor: "#EBF4FB" }}>
      <h1 className="smallcardh1">60+</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>

  <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3 text-center  p-0">
    <div className="col p-2 rounded-9" style={{ backgroundColor: "#EBF4FB" }}>
      <h1 className="smallcardh1">10+</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
</div>


 </>
  );
}

export default Mainbar;
