import React from 'react'
import { Outlet } from 'react-router-dom'
import Side from '../../components/side/Side'
import notification from  '../../assets/notification.svg'

function UserLayout() {
  return (
    <>
    <Side />
    <div className='userNav'>
   <img src={notification} alt="" />

    </div>
            <div className="bg">
            </div>
<Outlet/>



    </>
    )
}

export default UserLayout