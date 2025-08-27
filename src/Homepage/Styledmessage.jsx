import UserDetails from "../API/User details.js"
import React, { forwardRef } from 'react';
const Styledmessage = forwardRef(({message,PostedBy},ref)=>{
  const isUser = UserDetails().id.name == PostedBy
  return(
    <>
    <div className={isUser?"Mymessage":"Othermessage"} ref={ref}>
      <h1>{message}</h1>
     {isUser?null: <p>PostedBy:{PostedBy}</p>}
      </div>
      </>
    )
})
export default Styledmessage ;