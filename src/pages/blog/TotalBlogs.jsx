import axios from "axios";
import React from "react";
import HeroPost from "../../components/heroPost/HeroPost";
import PostPage from "../../components/PostsPage/PostPage";
import UserPost from "../user/bostAblog/UserPost";

function TotalBlogs() {
  let itemData;
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/blog/allblog");
      itemData = response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors gracefully
    }
    return itemData;
  }
  console.log(itemData);    

  fetchData(); // Call the function to execute the request

  return (
    <>
      <div className="contents">
        <div
          className="parent-second  d-flex justify-content-around w-100 flex-wrap "
          style={{ width: "fit-content", height: "fit-content" }}
        >
          {itemData.map((item, i) => {
            return (
              <div>
                {" "}
                <UserPost item={item} i={i} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TotalBlogs;
