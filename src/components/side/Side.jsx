import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {  useForm } from "react-hook-form";

function Side() {
  const auth = useAuth();
  const navigate = useNavigate("");
  const user = auth.user._id;

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null); // Assume image is a file object



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image); // Assuming image is a file object
    formData.append("userId", user); // Replace with actual user ID

    try {
      const response = await axios.post("http://localhost:8000/blog/addBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data); // Handle successful response (e.g., close modal, show success message)
      onBlogCreated && onBlogCreated(); // Call a callback if provided
      handleClose();
      setTitle("");
      setBody("");
      setImage(null);
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display error message to user)
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // Assuming single file selection
  };

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
          <Button className="ato " id="api" variant=" bg-transparent " onClick={handleShow}> <i className="fa-solid     fa-podcast" /> <span>post a blog</span></Button>
          <NavLink className="ato" to="allBlog">
            <i className="fa-solid   fa-blog" /> <span>blogs</span>
          </NavLink>
          {/* <NavLink className="ato" to="myFavorite">
            <i className="fa-solid fa-heart"> </i> <span>Favorite</span>
          </NavLink>
          <NavLink className="ato" to="myBlogs">
            <i className="fa-solid      fa-archive"> </i> <span> my blogs</span>
          </NavLink> */}
          <div className="NAVspacer" />
          <NavLink className="ato" to='userSettings/1'>
            <IoIosSettings className="icon" /> <span>settings</span>
          </NavLink>
          <button className="ato" id="bu" onClick={handleLogout}> <i className="fa-solid   fa-sign-out" /> <span>log out</span></button>
        </div>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                rows="5"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                onChange={handleImageChange}
              />
            </div>
            <Button variant="primary" type="submit">
              Create Blog
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Side;
