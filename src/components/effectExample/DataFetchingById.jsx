import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingById = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h2>
        We fetch individual post by passing POST ID to the get request -
        useEffect Hook & axios
      </h2>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <h4>{post.title}</h4>
      </div>
    </div>
  );
};

export default DataFetchingById;
