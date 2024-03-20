import React from "react";
import "./profile.css";
import { useAuth } from "../../../context/auth";
function Profile() {
 const auth = useAuth()
console.log(auth.user);

 const userData= auth.user;


  return (
    <section className="contents">
      <div className="profile ">
        <div className=" d-flex   justify-content-start  m-5  "><h2>my Data</h2></div>
        <div className=" cont d-flex w-100  justify-content-around    ">
     
        <div className="  d-flex justify-content-around ">
          <div className=" lista  " >
          <div className="p-3">
              <i className="fa-solid fa-circle-chevron-right" />
              <strong>Name:</strong> <span>{userData.fullName}</span>
            </div>
            <div className="p-3">
              <i className="fa-solid fa-circle-chevron-right" />
              <strong>Birthday:</strong> <span>{userData.fullName}</span>
            </div>
            <div className="p-3">
              <i className="fa-solid fa-circle-chevron-right" />
              <strong>Email:</strong>
              <span>{userData.email}</span>
            </div>
            <div className="p-3">
              <i className="fa-solid fa-circle-chevron-right" />
              <strong>Phone:</strong>
              <span>{userData.phoneNumber}</span>
            </div>
            <div className="p-3">
              <i className="fa-solid fa-circle-chevron-right" />
              <strong>City:</strong>
              <span> {userData.address}</span>
            </div>
          </div>
       
        </div>
        <div className=" d-flex justify-content-around">

        <div className="lista">
          <div className="p-3">
            <i className="fa-solid fa-circle-chevron-right" />
            <strong>Age:</strong>
            <span>{userData.fullName}</span>
          </div>
          <div className="p-3">
            <i className="fa-solid fa-circle-chevron-right" />
            <strong>Gender:</strong>
            <span>{userData.fullName}</span>
          </div>
          <div className="p-3">
            <i className="fa-solid fa-circle-chevron-right" />
            <strong>Points:</strong> <span>100</span>
          </div>
          <div className="p-3">
            <i className="fa-solid fa-circle-chevron-right" />
            <strong>Status:</strong>
            <span>{userData.fullName}</span>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Profile;
