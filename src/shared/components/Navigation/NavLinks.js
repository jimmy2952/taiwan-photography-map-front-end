import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import Button from "../../../shared/components/UIElements/Button"
import Modal from "../UIElements/Modal"
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const showConfirmModalHandler = () => setShowConfirmModal(true)
  const cancelDeleteHandler = () => setShowConfirmModal(false)


  return (
    <ul className={classes.NavLink}>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="確定登出？"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              取消
            </Button>
            <Button onClick={() => {
              auth.logout()
              cancelDeleteHandler()
            }}>
              確定
            </Button>
          </React.Fragment>
        }
      ></Modal>
      <li>
        <NavLink to="/" exact>
          首頁
        </NavLink>
      </li>
      <li>
        <NavLink to="/discover" exact>
          探索
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
      {auth.isLoggedIn && <li style={{cursor: "pointer"}} onClick={showConfirmModalHandler}><a>登出</a></li>}
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
