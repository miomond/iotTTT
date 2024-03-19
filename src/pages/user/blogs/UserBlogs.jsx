import React, { useState } from 'react'
import './userBlog.css'
import PostPage from '../../../components/PostsPage/PostPage';
import  secondImg1 from "../../../assets/inner1.jpeg";
import secondImg2 from "../../../assets/dash.png";
import secondImg3 from "../../../assets/tv.jpg";
import axios from 'axios';

function UserBlogs() {
  
  const user = JSON.parse(localStorage.getItem('user'));
  // const userName = user.fullName;
  console.log(user.data);
  const [post, setPost] = useState([]);
  const baseURL = "http://localhost:5000//allBlog/mansory";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {  setPost(response.data);
     
    });
  }, []);
  console.log(post);

  return (
    <div  style={{    width:'80%', height:'fit-content'}}    className='     posty' >
        
        {
            itemData.map((item,i)=>{
              return(
              <PostPage item={item}  i={i} />
            )
            })
          }


hi









    </div>
  )
}

export default UserBlogs