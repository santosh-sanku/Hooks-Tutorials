import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  /**
   * a loading flag indicates the data fetching happening in the background.
   */

  const [error, setError] = useState("");
  /**
   * an error messgae to dispaly the error message if somethign went wrong.
   */

  const [post, setPost] = useState();
  /**
   * a varible to hold the post that we would be fetching from an api endpoint.
   */

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
        /**
         * if the request is successfull, we make 3 state transitions.
         * we set loading to false
         * we post variable to response.data.
         * we set the error message to empty to clear any previous messgae if at all
         * they were being displayed.
         */
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
        /**
         * if the request is not succeded, the in catch block,
         * we set the loading flag to false.
         * we set post object to empty object, to hide any existing
         * post that might be displayed in the browser.
         * we set the error message.
         */
      });
  });

  return (
    <div>
      <h3>Fetching Data with useState here.</h3>
      {loading ? "Loading" : post.title}
      {error ? error : null}
      <p>
        NOTES : if at all the component is busy with laoding the data we are
        going to display the string "Loading". or else we going to display the
        post title. How ever it there is an error we need to display that.
      </p>
    </div>
  );
};

export default DataFetchingOne;
