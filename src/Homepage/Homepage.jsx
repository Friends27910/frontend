import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import logo from "../images/Logo.png"
import '../css/Hom.css'
export const Homepage = ()=>{
  const token = localStorage.getItem("Id")
  console.log(token);
  if (token==null) {
    name = "New user"
  }else{
  const decode = decodeToken(token)
  console.log(decode);
  var name = decode.id.name}
  return(
      <div>
          <div className="avbar">
              <nav className="navbar navbar-expand-lg navbar-dark" id="Navbar">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="#"><img src={logo} width="150px" id="logo" /></a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mx-auto">
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">About us</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link active" href="#">Friends Tube</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
          <section id="Home">
              <h1>Friends</h1>
              <p>Nothing is impossible when you have friends......</p>
              <div className="input-group m4">
                  <a href="/login"><button className="button-74">Get started</button></a><a>
              </a></div><a>
          </a></section><a>
      </a></div>
    )

}
