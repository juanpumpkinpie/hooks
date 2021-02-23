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

  const result = post.every((item) => {
    return item.name === "Juan";
  });

  console.group("aqui el console");
  console.log(result);
  console.groupEnd();

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {post.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
      <section>{result}</section>
    </div>
  );
};

export default Information;
