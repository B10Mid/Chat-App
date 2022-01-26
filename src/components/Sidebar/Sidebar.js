import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from '../../firebase/firebase';
import { useStateValue } from '../../providers/StateProvider';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // Run once when sidebar is loaded
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      })))
    });
  }, []);

  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <div className="user">
                <h5>{user?.displayName}</h5>
                <AccountCircleIcon id="account-icon" src={user.photoURL}/>
            </div>
            <SettingsIcon id="settings-icon"/>
        </div>

        <div className="sidebar-center">
            <div className="sidebar-icons">
              <SidebarOption Icon={InsertCommentIcon} title="Threads" />
              <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />
              <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            </div>
  
            <div className="sidebar-channels">
              <button className="channel-toggle" onClick={toggleChannels}>
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
              </button>
      
              <div className="channels">
                <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
                {channels.map(channel => (
                  <SidebarOption title={channel.name} id={channel.id} />
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

function toggleChannels() {
  let channels = document.getElementsByClassName("channels");

  Array.from(channels).forEach((channel) => {
    if (channel.style.display === "block") {
      channel.style.display = "none";
    } else {
      channel.style.display = "block";
    }
  });
}

export default Sidebar;