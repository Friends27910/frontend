import { useNavigate } from "react-router-dom"
import {Navigate} from "react-router-dom"
import { useState } from 'react';
import {LoginRequest} from '../API/SendApiRequest.jsx'
import {storeData} from "../API/StroageApi.js"
import isAuth from "../API/Auth.js"
function Login() {
  const navigate = useNavigate()
  const [err,seterr] = useState(null)
  const [loader,setloader] = useState(false)
  const [Data,setData] = useState({
   Name:"",
   Password:""
    })
    const Submit = async(e)=>{
    e.preventDefault();
    const msg = "Please fill out all fields"
    if(Data.Name || Data.Password == ""){
      
      seterr(msg.toUpperCase())
    }
    if(Data.Name && Data.Password == ""){

            seterr(msg.toUpperCase())
    }
    if(Data.Name == ""){
    
      seterr(msg.toUpperCase())
    }
    if(Data.Password == ""){
    
      seterr(msg.toUpperCase())
    }
    else{
    setloader(true)
    try {
      const request = await LoginRequest(Data)
      const Token = await request.data.token
      storeData(Token)
    } catch (err) {
      if(err.response.data.error){
      const newerr = err.response.data.error
      seterr(newerr.toUpperCase())
      }
    }
    finally{
      setloader(false)
    }
    
    
  }}

    
    const handleInput = (event) =>{
    setData({...Data,[event.target.name]:event.target.value})
}
  if(isAuth()){
    
    return (<Navigate to="/message" />)
  }
  return(
  <>
 <div>   
<div className="login-form">
  <form onSubmit={Submit}>
   {err?<h1 className="Danger"> {err} </h1> :<h1>Login</h1>}
    <div className="content">
      <div className="input-field">
        <input type="Name" placeholder="Name" autoComplete="nope" onChange={handleInput} name="Name"/>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" autoComplete="new-password" onChange={handleInput} name="Password"/>
      </div>
     {loader?(<span className="loader"></span>):null}
    </div>
    <div className="action">
          <button onClick={(e)=>{
            e.preventDefault()
        navigate("/register")
      }}>Register</button>
      <button type="submit" disabled={loader}>Sign in</button>
    </div>
  </form>
</div>
<style>
{`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #e35869;
  font-family: 'Rubik', sans-serif;
}

.login-form {
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.login-form h1 {
  padding: 35px 35px 0 35px;
  font-weight: 300;
}
.login-form .content {
  padding: 35px;
  text-align: center;
}
.login-form .input-field {
  padding: 12px 5px;
}
.login-form .input-field input {
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  padding: 10px 1px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  -webkit-transition: all .2s;
  transition: all .2s;
}
.login-form .input-field input::-webkit-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-moz-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::-ms-input-placeholder {
  text-transform: uppercase;
}
.login-form .input-field input::placeholder {
  text-transform: uppercase;
}
.login-form .input-field input:focus {
  border-color: #222;
}
.login-form a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
}
.login-form .action {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
}
.login-form .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.login-form .action button:hover {
  background: #d8d8d8;
}
.login-form .action button[disabled],button:disabled{
  background-color: #cccccc;
  color: #666666;
}

.login-form .action button:nth-child(2) {
  background: #2d3b55;
  color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 4px;
}
.login-form .action button:nth-child(2):hover {
  background: #3c4d6d;
}
#errmsg1{
  color: red;
  padding: 10px;
}.Danger{
  color: #FF0000;
}
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  background: #FFF;
  box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background: #FFF;
    box-shadow: -24px 0 #FF3D00, 24px 0 #FFF;
  }
  66% {
    background: #FF3D00;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  }
  100% {
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FF3D00;
  }
}`}
</style>
    </div>
</>
    )
}
export default Login ;