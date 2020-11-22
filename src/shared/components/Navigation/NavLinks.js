import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={classes.NavLink}>
      <li>
        <NavLink to="/" exact>
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          地圖
        </NavLink>
      </li>
      <li>
        <NavLink to="/weather" exact>
          天氣
        </NavLink>
      </li>
      <li>
        <NavLink to="/photo/new" exact>
          上傳照片
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" exact>
          登入
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" exact>
          註冊
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          我的頁面
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
