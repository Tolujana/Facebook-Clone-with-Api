import React from "react";
import styles from "./FriendsOnline.module.css";
const Folder= process.env.REACT_APP_PUBLIC_FOLDER;
export const FriendsOnline = ({ user }) => {
  return (
    <li className={styles.friendsInfo}>
      <div className={styles.profileImgContainer}>
        <img src={Folder+user.profilePicture} alt="" className={styles.friendsPics} />
        <div className={styles.online}></div>
      </div>

      <span className={styles.friendsName}>{user.username}</span>
    </li>
  );
};
