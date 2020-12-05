import React, { useState,useEffect } from 'react'
import './Chat.css'
import {Avatar} from '@material-ui/core'
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send'
import InsertEmoje from '@material-ui/icons/InsertEmoticon';
import {useParams} from 'react-router-dom';
import data from './firebase';

export default function Chat() {
  const {dataID}=useParams();
  const [input,setInput]=useState('');
  const [roomname,setRoomName]=useState('');
  const [messeges,setMessges]=useState([]);
  
 
  
 const sendMessge=(e)=>{
   e.preventDefault();
   const newMessger=[...messeges]
   newMessger.push({messgerText:input})
   setMessges(newMessger)
   console.log(input);
   setInput('');
  }
  useEffect(() => {
    if(dataID){
  const item= data.find(item=>item.id===dataID)
    setRoomName(item.name)
    setMessges(item.messeges)
    }
  }, [dataID])
    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>{roomname}</h3>
            <p>last seen tuesday 4</p>
          </div>
          <div className="chat__headerRight">
            <IconButton><SearchIcon/></IconButton>
            <IconButton><AttachFileIcon/></IconButton>
            <IconButton><MoreVertIcon/></IconButton>
          </div>
        </div>
            <div className="chat__body">
            {messeges.map((item)=>(
                <p className={`chat__message ${true && "chat__reciver"}`}>
                   <span className="chat__name">mr</span>
                <p key={item.id}>{item.messgerText}</p>
                    </p>
                  ))}
                   {/* <span className="chat__timeSet">3:52</span> */}
                   
                
        </div>
        <div className="chat__footer">
         <form>
           <InsertEmoje/>
         <input type="text" value={input} placeholder="type a message" onChange={(e)=>setInput(e.target.value)}/>
         <button type="submit" onClick={sendMessge}>send msg</button>
         {input.length === 0 && <MicIcon/>}
         {input.length >=1 && <SendIcon/>}

         </form>
        </div>
      </div>
    );
}
