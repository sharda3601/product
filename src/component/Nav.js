import React from "react";
import {NavLink, useNavigate} from 'react-router-dom';

function Nav() {
    const User = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.clear();
        navigate('/login');
    }

    return ( 
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white p-2 mx-3">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
            localStorage.getItem("user-info")?
            <>
            <li className="nav-item">
            <NavLink className="nav-link active text-white p-2 mx-3" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link text-white p-2 mx-3" aria-current="page" to="/addproduct">AddProduct</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white p-2 mx-3" aria-current="page" to="/update">UpdateProduct</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link text-white p-2 mx-3 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {User.username}
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item " to="/">Profile</NavLink></li>
              <li><NavLink className="dropdown-item" onClick={logout}>Logout</NavLink></li>
              <li><hr className="dropdown-divider"/></li>
            </ul>
          </li>
          </>
          :
          <>
          <li className="nav-item">
        <NavLink className="nav-link text-white p-2 mx-3" aria-current="page" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link text-white p-2 mx-3" aria-current="page" to="/login">Login</NavLink>
        </li>
        </>

        }
       
        
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default Nav;