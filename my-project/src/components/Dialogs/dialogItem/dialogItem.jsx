import React from "react";
import style from "./dialogItem.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.avatar}</NavLink>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;
