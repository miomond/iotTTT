import React from 'react'
import './formEdit.css'
import imgEdit from '../../../assets/EditFormSvg.svg'
import { useAuth } from '../../../context/auth'





function FormEdit() {

  const auth = useAuth();
 console.log(auth);



  return (
<>
<section className='section-edit-form'>
  <div>
    <img className="img" src={imgEdit} alt="" />
  </div>
  <form action="" className="edit-info-user">
    <h1>Edit Your Information</h1>
    <div className="form-info">
      <label htmlFor="fullName">Full Name</label>
      <input
        className="input-data"
        type="text"
        name="fullName"
        id=""
        placeholder="Enter Your Full Name"
        autoComplete="off"
      />
    </div>
    <div className="form-info">
      <label htmlFor="Email">Email</label>
      <input
        className="input-data"
        type="email"
        name="Email"
        id=""
        placeholder="Enter Your Email"
        autoComplete="off"
      />
    </div>
    <div className="form-info">
      <label htmlFor="Phone Number">Phone Number</label>
      <input
        className="input-data"
        type="tel"
        name="phone Number"
        id=""
        placeholder="Enter Your phone Number"
        autoComplete="off"
      />
    </div>
    <div className="form-info">
      <label htmlFor="National Id">National Id</label>
      <input
        className="input-data"
        type="tel"
        name="National Id"
        id=""
        placeholder="Enter Your National Id"
        autoComplete="off"
      />
    </div>
    <div className="form-info">
      <label htmlFor="Address">Address</label>
      <input
        className="input-data"
        type="text"
        name="Address"
        id=""
        placeholder="Enter Your Address"
        autoComplete="off"
      />
    </div>
    <button className="button-setting">Update Data</button>
  </form>
</section>





</>
  )
}

export default FormEdit