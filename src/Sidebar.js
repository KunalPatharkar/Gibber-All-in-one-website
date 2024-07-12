import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannel] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannel(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const textAddChannel = () => {
    const channelName = prompt("Enter a new text channel name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h1>{user.displayName} Server</h1>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar_channelsection">
        <div className="sidebar_channels">
          <div className="sidebar_channelsHeaders">
            <div className="sidebar_header">
              <ExpandMoreIcon />
              <h4>Text Channel</h4>
            </div>
            <AddIcon onClick={textAddChannel} className="sidebar_addchannel" />
          </div>

          <div className="sidebar_channelsList">
            {channels.map(({ id, channel }) => (
              <SidebarChannel
                key={id}
                id={id}
                channelName={channel.channelName}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar_meet">
        <Button className="joinbtn" variant="contained" color="blue">
          <a href="https://zoom.us/join"> Join Meeting </a>
        </Button>
      </div>

      <div className="sidebar_profile">
        <Avatar src={user.photo} />
        <div className="sidebar_profileinfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar_profileicons"></div>
      </div>
    </div>
  );
}

export default Sidebar;
