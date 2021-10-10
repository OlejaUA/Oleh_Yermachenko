import React from "react";
import Avatar from "../../../Avatar/Avatar";
import style from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.Post}>
      <Avatar />

      {message}
      <br />
      <input
        type="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Facebook_like_thumb.png/700px-Facebook_like_thumb.png"
        alt={"none"}
      />
      {likesCount}
    </div>
  );
};

export default Post;
