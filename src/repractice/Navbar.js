import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css';

function Navbar() {
    return ( 
        <>
        <ul style={{listStyle : "none"}} className="navbar1">
            <li>
            <NavLink to="/" className="dd" style={({isActive})=>{return {backgroundColor : isActive ? "green" : "red", padding : 10}}}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className="dd" style={({isActive})=>{return {backgroundColor : isActive ?  "green" : "red", padding : 10}}}>About</NavLink>
            </li>
            <li>
            <NavLink to="/user/sharda" className="dd" style={({isActive})=>{return {backgroundColor : isActive? "green" : "red", padding :10}}}>sharda</NavLink>
            </li>
            <li>
            <NavLink to="/user/jagtap" className="dd" style={({isActive})=>{return {backgroundColor : isActive ?"green" :"red", padding : 10}}}>jagtap</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="dd" style={({isActive})=>{return {backgroundColor : isActive ?"green" :"red", padding : 10}}}>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/login" className="dd" style={({isActive})=>{return {backgroundColor : isActive ? "grren" : "red", padding :10}}}>Login</NavLink>
            </li>
        </ul>
        </>
     );
}

export default Navbar;