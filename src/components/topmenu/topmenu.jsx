import React, { useContext, useState } from "react";
import styles from "./topmenu.module.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Messenger from "../messenger/Messenger";
import SingleMessage from "../singlemessage/SingleMessage";

function Topmenu() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [messenger, setMessenger] = useState(false);

  const toggle = () => {
    setMessenger((prev) => {
      return !prev;
    });
  };
  return (
    <div className={styles.topmenuContainer}>
      <div className={styles.topmenuLeft}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>FinJana</span>
        </Link>
      </div>
      <div className={styles.topmenuCenter}>
        <div className={styles.searchBar}>
          <SearchIcon />
          <input
            placeholder="Search for friends"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topmenuRight}>
        <div className="topmenuLinks">
          <span className={styles.toplink}>HomePage</span>
          <span className={styles.toplink}>Timeline</span>
        </div>
        <div className={styles.topmenuIcons}>
          <div className={styles.topmenuIconItem}>
            <PersonIcon />
            <span className={styles.topmenuIconValue}>1</span>
          </div>
          <div className={styles.topmenuIconItem}>
            <ChatBubbleIcon onClick={toggle} />
            <span className={styles.topmenuIconValue}>1</span>
            <div
              className={styles.messenger}
              style={messenger ? { display: "block" } : { display: "none" }}
            >
              <Messenger />
            </div>
          </div>
          <div className={styles.topmenuIconItem}>
            <PublicIcon />
            <span className={styles.topmenuIconValue}>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : `${PF}/noimage.png`
            }
            alt=""
            className={styles.profilepic}
          />
        </Link>
      </div>
      <div className={styles.single}>
        <SingleMessage />
      </div>
    </div>
  );
}

export default Topmenu;
