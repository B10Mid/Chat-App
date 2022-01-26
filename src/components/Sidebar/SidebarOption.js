import React from 'react';
import './SidebarOption.scss';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase/firebase';

function SidebarOption({Icon, title, id, addChannelOption}) {

  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/channel/${id}`)
    } else {
      navigate(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Add Channel: ");

    if (channelName) {
      db.collection('channels').add({
        name: channelName,
      })
    }
  };

  return (
    <div className ="sidebar-option" onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon className="sidebar-option-icon"/>}
        {Icon ? (
            <h3>{title}</h3>
        ): (
            <h3 className="sidebar-option-channel">
                <span className="sidebar-option-hash">#</span>{title}
            </h3>
        )}
    </div>
  );
}

export default SidebarOption;
