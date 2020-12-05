import React, { useEffect } from 'react'
import {Avatar} from '@material-ui/core'
import './SidebarChats.css'
import {Link }from 'react-router-dom';

export default function SidebarChats({ name,id }) {
  
  // const createChat = () => {
  //   const roomName = prompt("Enetr name of new chat")
  //   if (roomName) {
  //     // do some clever stuff here
  //   }
  // }

  return (
    <Link to={`/${id}`}>
    <div className="sidebarChats">
      <Avatar />
      <div className="sidebarChat__info">
       <h3>{name}</h3>
      </div>
    </div>
    </Link>
    )
  }
  // ) : (
  //   <div onClick={createChat} className="sidebarChats">
  //     <h2>Add New Chat</h2>
  //   </div>
  // );

