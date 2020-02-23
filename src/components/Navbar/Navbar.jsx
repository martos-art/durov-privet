import React from 'react';
import navbar from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>

      <div className={navbar.item}>
        <NavLink to='/profile' activeClassName={navbar.activeLink}>Profile</NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to='/dialogs' activeClassName={navbar.activeLink}>Messages</NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to='/news' activeClassName={navbar.activeLink}>News</NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to='/music' activeClassName={navbar.activeLink}>Music</NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to='/settings' activeClassName={navbar.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;