import axios from "axios"
import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import {searchData} from "./StroageApi.js"
const uri = "https://backend-bay-two-32.vercel.app/Api"
export const ApiRequest =  async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = `${uri}/Register`
  console.log(url)
  return (axios.post(url,Data1))
}
export const LoginRequest = async(Data) =>{
  const Data1 = {
    name:Data.Name,
    password:Data.Password
  }
  const url = `${uri}/login`
  return (axios.post(url,Data1))
}
export const Messageapi = async(Data) =>{
  const Id = searchData()
  const decodetoken =  decodeToken(Id)

    const Data2 = {
    Message:Data,
    PostedBy:decodetoken.id.name
  }
 
  const url =  `${uri}/chat`
  return (axios.post(url,Data2))
}
export const searchMessageapi = async()=>{
  const url = `${uri}/searchChat`
    return axios.get(url)
}
