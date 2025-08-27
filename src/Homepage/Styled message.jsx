import {Card,CardContent,Typography } from "@mui/material"
import { isExpired, decodeToken } from "react-jwt";
const styledMessage = ({PostedBy,message}) =>{
  const token = localStorage.getItem("Id")
  const decode = decodeToken(token)
  console.log(decode);
  var name = decode.id.name
  const isUser = Postedby == name
  return(
    <>
    <Card className={isUser?"Owner":"Guest"} >
    <CardContent >
  
    </CardContent>
    </Card>
    </>)
}
export default styledMessage;