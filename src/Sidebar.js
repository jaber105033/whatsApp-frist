import React, { useState,useEffect } from 'react'
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChats from './SidebarChats'
import data from './firebase';
import {useParams} from 'react-router-dom';
export default function Sidebar() {
  const [rooms,setRooms]=useState([]);
  const [search,setSearch]=useState('q');
  const {dataID}=useParams();

  useEffect(() => {
     setRooms(
       data.map((item)=>({
         id:item.id,
         name:item.name
       }))
     )
  }, [])
  function handleSearch(e){
   setSearch(e.target.value)
  }
  
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <input className="" type="text" placeholder="search here" onChange={handleSearch} />
          </div>
        </div>
        <div className="sidebar__chats">
          {/* <SidebarChats addNewChat/> */}
         {rooms
         .filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
         .map(item=>{
          return( <SidebarChats key={item.id} id={item.id} name={item.name} />)
         })}
        </div>
      </div>
    );
}
















