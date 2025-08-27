import "../css/Message.css"
import axios from "axios"
import Logo from "../images/Logo.png"
import React from 'react';
import "../css/Global.css"
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
    "PostedBy":"ADMIN"
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
      <Styledmessage  key={1} className="text-3xl font-bold underline" message={Message} PostedBy={PostedBy}/>
      )
   })}
   </FlipMove>
  </div>
   <div className="Main">

   <form className="app_form" onSubmit={submit}>
   <div className="input">
    <FormControl className="app_FormControl">
  <input placeholder="Enter Your Text.." className="textInput"   onChange={(event)=>{
      setInput(event.target.value);
  }}/>
    </FormControl>
   <SendIcon />
   </div>

   </form>
   </div>
   <style>

   </style>
   </>
  )
}
export default Messages