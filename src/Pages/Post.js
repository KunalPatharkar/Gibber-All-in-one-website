import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from "./InputOption";

function Post({ user, message, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={user.photo} />
        <div className="post__info">
          <h2>{user.displayName}</h2>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <h4>
        <div className="post__body">
          <p>{message}</p>
        </div>
      </h4>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="white" />
        {/* <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" /> */}
      </div>
    </div>
  );
}

export default Post;
