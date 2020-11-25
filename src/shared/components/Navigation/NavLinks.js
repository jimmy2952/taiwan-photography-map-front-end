import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.NavLink}>
      <li>
        <NavLink to="/" exact>
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink to="/map" exact>
          地圖
        </NavLink>
      </li>
      <li>
        <NavLink to="/weather" exact>
          天氣
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/photo/new" exact>
            上傳照片
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && <li style={{cursor: "pointer"}} onClick={auth.logout}>登出</li>}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login" exact>
            登入
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup" exact>
            註冊
          </NavLink>
        </li>
      )}

      {/* <li>
        <NavLink to="/" exact>
          我的頁面
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
