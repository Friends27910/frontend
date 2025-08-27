import React from "react";
import { isExpired, decodeToken } from "react-jwt";
const userDetails = () =>{
  const token = localStorage.getItem("Id")
  console.log(token);
  const decode = decodeToken(token)
  console.log(decode);
  return decode
    }
export default userDetails;