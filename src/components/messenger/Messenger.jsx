import style from "./Messenger.module.css";
import { VideoCall, MoreVert, Create } from "@mui/icons-material";

import { FriendsOnline } from "../friends/FriendsOnline";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import SingleMessage from "../singlemessage/SingleMessage";

const Messenger = () => {
  const { user } = useContext(AuthContext);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await axios.get("/users/friend/" + user._id);
        setFriends(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, [user._id]);
  return (
    <div className={style.messenger}>
      <div className={style.top}>
        <span className={style.title}>Chat</span>
        <div className={style.icons}>
          <VideoCall /> <MoreVert /> <Create />
        </div>
      </div>
      <input placeholder="Search Messenger" className={style.searchInput} />

      <ul className={style.friendsList}>
        {friends.map((u) => (
          <FriendsOnline key={u.id} user={u} />
        ))}
      </ul>
      <div className={style.single}></div>
    </div>
  );
};

export default Messenger;
