import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {Homepage} from "./Homepage/Homepage.jsx"
import Messages from "./Homepage/Messages.jsx"
import Login from "./Components/Login.jsx"
import Register from "./Components/Register.jsx"
//mport Avatar from "./Components/Avatar.jsx"
function Controller(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path="/"  element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/message" element={<Messages />} />
    </Routes>
   </BrowserRouter>
    </div>
    )
}
export default Controller;