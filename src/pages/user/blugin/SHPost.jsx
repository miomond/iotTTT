import React from 'react'
import './SHPostRender.css'
import LikeButton from "../../../components/buttonLike/LikeButton"; // Assuming LikeButton handles likes
import { NavLink, useNavigate } from 'react-router-dom';

function SHPost({ item, i } ) {
    const post = item;
    const posted = item._id;
    const navigate = useNavigate();


    console.log(post.likes);
    console.log(post._id);

  return (
    <>
    <div className="contant1">
  <div className="card">
    <img     src={post.image}   alt={post.title} />
    <div className="card__content">
      <h1 className="card__title">Title: {post.title}</h1>
      <p className="card__description"> <span className="fs-5"> description:{post.body} </span> </p>
      <h6>count Like: </h6>
      <div className="postedBy">
      <LikeButton likes={post.likes} id={post._id} /> {/* Pass likes count to LikeButton */}
        <NavLink className="readMore" to='theFullPost'  >Read More</NavLink>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default SHPost