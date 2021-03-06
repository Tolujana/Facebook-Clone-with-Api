import style from "./content.module.css";
import React, { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";

function Content({username}) {
  const [posts, setPost]=useState([])
  const{user}=useContext(AuthContext)

  useEffect( ()=>{
const fetchPost=async()=>{
  const res= username 
  ? await axios.get("/posts/profile/"+ username) 
  : await axios.get(`posts/timeline/${user._id}`);
console.log(res.data)
  setPost(res.data.sort((p1,p2)=>{
 return new Date(p2.createdAt)- new Date(p1.createdAt)
  }))
  
}
fetchPost()
  },[ username,user._id]
  )
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        {username===user.username&&<Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Content;
