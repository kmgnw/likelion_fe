import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./post.scss";
import EX from "../../assets/exPost.png";
import CommentInput from "./components/CommentInput";

const PostDetailPage = () => {
  const navigate = useNavigate();
  const goPostPageHandler = () => {
    navigate(`/post`);
  };

  const [post, setPost] = useState(null);


  useEffect(()=>{
    const postId = localStorage.getItem("postId");

    const fetchPosts = async ()=>{
      try{

        const response = await axios.get(`http://43.202.217.156:8080/api/posting/${postId}`)

        setPost(response.data.data);

      }catch (error){
        console.log('error');
      }
    }

    fetchPosts();


  }, [])


  if (!post) {
    return <div className="PostDetailConatiner">로딩 중...</div>;
  }

  return (
    <div className="PostDetailConatiner">
      <div className="PostDetailContent">
        <h2>Q. {post.title}</h2>
        <div className="userAndDate">
          <div className="userText">{post.user || "작성자"}</div>
          <div className="dateText">{post.date || "날짜"}</div>
        </div>
        <div>{post.content}</div>
        .<br />.<br />.<br />.<br />.<br />
        <img src={EX} alt="example" />
      </div>
      <div className="buttonContainer">
        <button className="bookmarkButton">북마크</button>
        <button className="listButton" onClick={goPostPageHandler}>
          목록
        </button>
      </div>
      <div>
        <CommentInput />
      </div>
    </div>
  );
};

export default PostDetailPage;