import React from 'react'
import { MdHealthAndSafety } from "react-icons/md";
export default function Catogery() {
  return (
    <div className="catogery  row flex-column-reverse flex-md-row p-3">
       
        
       <div className="input_div col-5 " style={{backgroundColor:'#EBF4FB'}}>
  <h2 className="doctors_heading justify-content-center text-center">Meet Your Doctors</h2>
  <div className="input_area ">
    <div className='align-item-center d-flex flex-column align-items-center m-4' >
    <input  style={{ width: '100%' }} type="text" placeholder='Enter Your name' /><br /><br />
    <input  style={{ width: '100%' }} type="text" placeholder='Enter Your contact' /><br /><br />
    <div className="d-flex col-12">
          <select name="doctor" id="selectDoctor" style={{ marginRight: '10px',width:'50%' }}>
          <option value="doctor1">Doctor Name</option>
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
            <option value="doctor3">Doctor 3</option>
          </select>

          <select name="department" id="selectDepartment" style={{width:'50%'}}>
          <option value="department1">Department </option>
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            <option value="department3">Department 3</option>
          </select>
        </div>
        </div>
  </div>
</div>

<div className="icons_area col-7   text-light">
      <div className="row p-3">
        <div className="icons col-3 d-flex flex-column align-items-center ">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
      </div>
      <div className="row">
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
        <div className="icons col-3 d-flex flex-column align-items-center">
          <MdHealthAndSafety />
          <p className="icon_text">lorum ipsum</p>
        </div>
      </div>
    </div>
        
      
    </div>
  )
}
