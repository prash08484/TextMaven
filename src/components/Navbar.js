import React from 'react'
import PropTypes from 'prop-types'
import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className="navbar bg-body-tertiary ">
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <div>
        <a className="navbar-brand "><h1> {props.title}</h1></a> 
        <a className="navbar-brand mx-2 " href="#">About</a> 
        <a className="navbar-brand mx-2 " href="#">Home</a> 
        </div>
        <div className="form-check form-switch mx-5">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : `dark`}`} htmlFor="flexSwitchCheckDefault mx-8">{props.mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  place: PropTypes.string
}
