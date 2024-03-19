import "./postPage.css";
import LikeButton from "../buttonLike/LikeButton";
import CommentButton from "../commentButton/CommentButton";
function PostPage({item , i}) {
  const post =item;
  return (
    <>
      <section className="third-section   d-flex justify-content-center  align-items-center  flex-column flex-wrap p-3">
        <div className=" third-card   d-flex justify-content-center flex-column   flex-lg-row   align-items-center ">
          <img src={post.img} alt="" />
          <div className="third-card-paragraph w-100">
            <h2>{post.title} </h2>
            <p>
            {post.paragraph}
            </p>

            <div className="like-button">
              <LikeButton></LikeButton>
             <CommentButton></CommentButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PostPage;
