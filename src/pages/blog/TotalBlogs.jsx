import React from "react";
import axios from "axios";
import UserP from "../../components/userPost/UserP";
import { useState, useEffect } from "react";
import SHPost from "../user/blugin/SHPost";


function TotalBlogs() {
  const [itemData, setItemData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog/allblog");
        setItemData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once


  return (
    <>
      <div className="contents">
        <div
          className="parent-second  d-flex justify-content-around w-100 flex-wrap "
          style={{ width: "fit-content", height: "fit-content" }}
        >
          {itemData.length > 0 && (
            itemData.map((item, i) => (
              <div key={i}> {/* Add a key for each item */}
                <SHPost item={item} i={i} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default TotalBlogs;
