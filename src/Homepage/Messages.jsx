import "../css/Message.css"
import axios from "axios"
import Logo from "../images/Logo.png"
import React from 'react';
import {Messageapi} from "../API/SendApiRequest.jsx"
import {searchMessageapi} from "../API/SendApiRequest.jsx"
import UserDetails from "../API/User details.js"
import {useState,useEffect} from "react"
import FlipMove from 'react-flip-move';
import Styledmessage from "./Styledmessage.jsx"
import {FormControl,Input,IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
const Messages = () =>{
  const userDetails = UserDetails()
  const [input,setInput] = useState()
  const[oldmessage,setOldmessage] = useState([{
    "Message":"Welcome",
    "PostedBy":"JOLLY BRO"
  }])
  console.log(input);
  const submit = async(e) =>{
    e.preventDefault();
  let response =await Messageapi(input)
  let message = await response
  }
searchMessageapi()
 .then((res)=>{
   console.log(res)
   const mapmsg = res.data.map((items)=>{
     return({Message:items.Message,PostedBy:items.PostedBy})
   })
  
   setOldmessage(mapmsg)
   console.log(oldmessage);
 })
 .catch((err)=>{
   console.log(err);
 })
  return(
   <>
   <div className="userDetails">
  <h1> welcome {userDetails?userDetails.id.name:"New User"} </h1>
  </div>
  <div className="Messagescontent">
  <FlipMove>
    {oldmessage.map(({Message,PostedBy})=>{
    return(
      <Styledmessage  key={1} message={Message} PostedBy={PostedBy}/>
      )
   })}
   </FlipMove>
  </div>
   <div className="Main">
   
   <form className="app_form" onSubmit={submit}>
   <div className="input">
    <FormControl className="app_FormControl">
   <Input className="app_input" placeholder="Enter your message...!" onChange={(e)=>{
     setInput(e.target.value)
   }} />
   <IconButton varaint="contained" type="submit" color="primary" className="BTN_icon" disabled={!input}/>
    </FormControl>
   <SendIcon />
   </div>

   </form>
   </div>
   <style>
   {
   }
   </style>
   </>
  )
}
export default Messages