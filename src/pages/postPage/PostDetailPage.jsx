import React from "react";
import posts from "../../datas/posts.json";
import { useNavigate, useParams } from "react-router-dom";
import "./post.scss";
import EX from "../../assets/exPost.png";
import CommentInput from "./components/CommentInput";

const PostDetailPage = ({ posts }) => {
  const navigation = useNavigate();
  const goPostPageHandler = () => {
    navigation(`/post`);
  };

  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  return (
    <div className="PostDetailConatiner">
      <div className="PostDetailContent">
        <h2>Q. {post.title}</h2>
        <div className="userAndDate">
          <div className="userText">{post.user}</div>
          <div className="dateText">{post.date}</div>
        </div>
        <div>{post.content}</div>
        .<br />.<br />.<br />.<br />.<br />
        <img src={EX} />
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
