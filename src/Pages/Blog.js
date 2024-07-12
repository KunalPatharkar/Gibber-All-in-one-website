// import { VerifiedUser } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Navigator from "./Navigator";
import "./Blog.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { CalendarViewDay, ImageOutlined } from "@material-ui/icons";
import Post from "./Post";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
// import firebase from "firebase";
import { Firestore, serverTimestamp } from "firebase/firestore";
// import { FirebaseError } from "firebase/app";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import { VerifiedUser } from "@material-ui/icons";

function Blog() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      user: user,
      message: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <Navigator />
      <div className="blog">
        <div className="blog__inputContainer">
          <div className="blog__input">
            <CreateIcon />
            <form name="myform">
              <textarea
                id="blog"
                value={input}
                // onChange={validate()}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                required
                placeholder="Write your blog here"
              />
              <button onClick={sendPost} type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        {/* Posts */}
        {posts.map(({ id, data: { user, message, timestamp } }) => (
          <Post user={user} message={message} key={id} timestamp={timestamp} />
        ))}
      </div>
    </div>
  );
}
{
  /*   */
}
export default Blog;
