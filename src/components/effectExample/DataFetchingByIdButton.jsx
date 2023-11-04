import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingByIdButton = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonCLick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  /**
   * we call setIdFromButtonClick passing in the current id value,
   * which the text input field value.
   */

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonCLick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonCLick]);

  /**
   * Let the effect know, it is depended on the id from the button click value
   * instead of regular id from onchange.
   */

  return (
    <div>
      <h2>Trigger an effect on a button click</h2>
      <h2>create a button and add a button handler</h2>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>
          Fetch Post
        </button>
        <h4>{post.title}</h4>
      </div>
    </div>
  );
};

export default DataFetchingByIdButton;
