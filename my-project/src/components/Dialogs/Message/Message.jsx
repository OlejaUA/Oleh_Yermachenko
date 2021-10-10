import React from "react";
import style from "./message.module.css";

const Message = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};

export default Message;
