import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>

      <div className={style.item}>
          <a href='/Profile'>Profile</a>
      </div>
      <div className={style.item}>
          <a href='/Dialogs'>Messages</a>
      </div>
      <div className={style.item}>
          <a href='news'>News</a>
      </div>
      <div className={style.item}>
          <a href='music'>Music</a>
      </div>
      <div className={style.item}>
          <a href='settings'>Settings</a>
      </div>
    </nav>
  )
};

export default Navbar;