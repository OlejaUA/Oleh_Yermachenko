import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/imagies/avatar.png";
import style from "./Users.module.css";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.users}>
      <div className={style.photo}>
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            className={style.userPhoto}
          />
        </NavLink>
      </div>
      <div className={style.discription}>
        <div className={style.info}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
      </div>
      <div className={style.followButton}>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default User;
