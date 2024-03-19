import React from 'react'
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';
import { IoIosSettings } from "react-icons/io";
import { useAuth } from '../../context/auth';
import { useNavigate } from "react-router-dom";
function Side() {
const auth = useAuth()
const navigate = useNavigate('')


const handleLogout = ()=>{
  auth.logout();
  navigate('/login');
}


  return (
    <>
         <div className="contaminator">
        <div id="NAV">
          <NavLink className="ato  " to="profile">
            <i className="fa-solid   fa-face-grin-stars" />{" "}
            <span> Profile</span>
          </NavLink>
          <NavLink to="dashboard" className=" ato">
            <i className="fa-solid    fa-dashboard" /> <span>Dashboard</span>
          </NavLink>
          <NavLink to="newblog" className=" ato">
            <i className="fa-solid    fa-dashboard" /> <span>post a blog</span>
          </NavLink>
          <NavLink to="allBlog" className=" ato">
            <i className="fa-solid    fa-dashboard" /> <span>all blogs</span>
          </NavLink>
          <NavLink className="ato" to="allBlogs">
            <i className="fa-solid   fa-blog" /> <span>blogs</span>
          </NavLink>
          <NavLink className="ato" to="myFavorite">
            <i className="fa-solid fa-heart"> </i> <span>Favorite</span>
          </NavLink>
          <NavLink className="ato" to="myBlogs">
            <i className="fa-solid      fa-archive"> </i> <span> my blogs</span>
          </NavLink>
          <div className="NAVspacer" />
          <NavLink className="ato" to="userSettings/1">
          <IoIosSettings className='icon' />   <span>settings</span>
          </NavLink>
          <button className="ato" id='bu' onClick={handleLogout}>
            <i className="fa-solid    fa-sign-out" />
            <span>log out</span>
          </button>
        </div>
      </div>
    </>
      )
}

export default Side