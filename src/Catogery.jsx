import React from 'react';
import { MdHealthAndSafety, MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiHealthCapsule, GiHealthDecrease, GiHealthPotion } from 'react-icons/gi';
import { RiHealthBookFill } from 'react-icons/ri';

export default function Category() {
  return (
    <div className="category row flex-column-reverse flex-md-row p-3">
      <div className="input_div col-12 col-md-5 mb-3 mb-md-0" style={{ backgroundColor: '#EBF4FB' }}>
        <h2 className="doctors_heading justify-content-center text-center">Meet Your Doctors</h2>
        <div className="input_area">
          <div className="align-item-center d-flex flex-column align-items-center m-4">
            <input style={{ width: '90%', backgroundColor: '#D9D9D9' }} type="text" placeholder="Enter Your name" /><br /><br />
            <input style={{ width: '90%', backgroundColor: '#D9D9D9' }} type="text" placeholder="Enter Your contact" /><br /><br />
            <div className="d-flex col-12">
              <select name="doctor" id="selectDoctor" style={{ marginRight: '10px', width: '50%', backgroundColor: '#D9D9D9' }}>
                <option value="doctor1">Doctor Name</option>
                <option value="doctor1">Doctor 1</option>
                <option value="doctor2">Doctor 2</option>
                <option value="doctor3">Doctor 3</option>
              </select>

              <select name="department" id="selectDepartment" style={{ width: '50%', backgroundColor: '#D9D9D9' }}>
                <option value="department1">Department </option>
                <option value="department1">Department 1</option>
                <option value="department2">Department 2</option>
                <option value="department3">Department 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="icons_area col-12 col-md-7 text-light">
        <div className="row p-3">
          <div className="icons col-3 d-flex flex-column align-items-center">
            <MdHealthAndSafety />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <MdOutlineHealthAndSafety />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <GiHealthCapsule />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <GiHealthDecrease />
            <p className="icon_text">lorum ipsum</p>
          </div>
        </div>
        <div className="row">
          <div className="icons col-3 d-flex flex-column align-items-center">
            <GiHealthPotion />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <MdHealthAndSafety />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <RiHealthBookFill />
            <p className="icon_text">lorum ipsum</p>
          </div>
          <div className="icons col-3 d-flex flex-column align-items-center">
            <MdHealthAndSafety />
            <p className="icon_text">lorum ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
