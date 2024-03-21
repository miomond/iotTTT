import React from "react";
import "./profile.css";
import { useAuth } from "../../../context/auth";
function Profile() {
  const auth = useAuth();
  console.log(auth.user);

  const userData = auth.user;

  return (
    <>
      <section className="contents">
        <div className="profile ">
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-user me-3 " /> Full Name:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.fullName}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5 ">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-envelope me-3" />
                Email:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.email}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-phone me-3" /> Phone:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white"> {userData.phoneNumber}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-passport me-3" /> National Id:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.nationalId}</p>
            </div>
          </div>
          <hr className="w-75 ms-5" />
          <div className="row ps-5 ms-5">
            <div className="col-sm-4">
              <p className="mb-0">
                {" "}
                <i className="fa-solid fa-location me-3" />
                Address:
              </p>
            </div>
            <div className="col-sm-2">
              <p className=" mb-0 text-white">{userData.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="contents">
    //   <div className="profile ">
    //     <div className=" d-flex   justify-content-start  m-5 text-white "><h2>personal Information</h2></div>
    //     <div className=" cont d-flex w-100  justify-content-around    ">

    //     <div className="  d-flex justify-content-around ">
    //       <div className=" lista  " >
    //       <div className="p-3">
    //           <i className="fa-solid fa-user " />
    //           <strong className="ms-2">Name:</strong> <span className="ms-2 text-white">{userData.fullName}</span>
    //         </div>

    //         <div className="p-3">
    //           <i className="fa-solid fa-envelope" />
    //           <strong className="ms-2">Email:</strong>
    //           <span className="ms-2 text-white">{userData.email}</span>
    //         </div>
    //         <div className="p-3">
    //           <i className="fa-solid fa-phone" />
    //           <strong className="ms-2">Phone:</strong>
    //           <span className="ms-2 text-white">{userData.phoneNumber}</span>
    //         </div>

    //       </div>

    //     </div>
    //     <div className=" d-flex justify-content-around">

    //     <div className="lista">
    //       <div className="pt-5">
    //         <i className="fa-solid fa-passport" />
    //         <strong className="ms-2">National Id: </strong>
    //         <span className="ms-2 text-white">{userData.nationalId}</span>
    //       </div>
    //       <div className="pt-5">
    //         <i className="fa-solid fa-location" />
    //         <strong className="ms-2">Address:</strong>
    //         <span className="ms-2 text-white">{userData.address}</span>
    //       </div>

    //     </div>
    //     </div>
    //   </div>
    //   </div>
    // </section>
  );
}

export default Profile;
