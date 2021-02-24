import React, { useEffect, useState } from "react";
import axios from "axios";

const Information = () => {
  const [post, setPosts] = useState([]);

  const getPost = async () => {
    try {
      const userPosts = await axios.get("./data.json");
      setPosts(userPosts.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    // <div>
    //   {post.map((post) => (
    //     <li key={post.id}>{post.name}</li>
    //   ))}
    //   <section>{result}</section>
    // </div>
    <div>
      <ul>
        <p>Filter by Id +1</p>
        {post
          .filter((item) => item.id > 1)
          .map((filtered) => (
            <li key={filtered.id}>
              {filtered.name}
              {filtered.description}
            </li>
          ))}
      </ul>
      <section>
        Result of all data here:
        <ul>
          {post.map((items) => (
            <li key={items.id}>{items.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Information;
