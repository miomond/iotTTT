import React, { useState } from 'react';
import '../editForm/formEdit.css';
import imgEdit from '../../../assets/EditFormSvg.svg';
import axios from 'axios';

function Blogering() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    image: null, // Store the selected image file object
    userId: '65edc5edac199b8ad8825cc8' // Pre-filled user ID
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, body, image, userId } = formData;

    if (!title || !body || !image) {
      // Handle missing field validation (optional)
      console.error('Please fill in all required fields.');
      return;
    }

    const newFormData = new FormData(); // Create a new FormData object
    newFormData.append('title', title);
    newFormData.append('body', body);
    newFormData.append('image', image); // Append the image file
    newFormData.append('userId', userId);

    try {
      const response = await axios.post('http://localhost:5000/blog/addblog', newFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value // Handle image and other fields separately
    }));
  };

  return (
    <section>
      <div>
        <img className='img' src={imgEdit} alt="" />
      </div>
      <form onSubmit={handleSubmit} className="edit-info-user">
        <h1>Create a Blog</h1>
        <div className="form-info">
          <label htmlFor="title">Title</label>
          <input
            className="input-data"
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            id="title"
            placeholder="Enter Your Blog Title"
            autoComplete="off"
          />
        </div>
        <div className="form-info">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="input-data"
            name="image"
            placeholder="Choose an Image"
          />
        </div>
        <div className="form-info">
          <label htmlFor="body">Body</label>
          <input
            className="input-data"
            type="text"
            name="body"
            id="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter Your Blog Content"
            autoComplete="off"
          />
        </div>
        <div className="form-info">
          <label htmlFor="userId">UserID (hidden)</label>
          <input
            className="input-data"
            type="hidden"
            name="userId"
            id="userId"
            value={formData.userId} // Pre-filled user ID
          />
        </div>
        <button type="submit" className="button-setting">
          Create Blog
        </button>
      </form>
    </section>
  );
}

export default Blogering;
