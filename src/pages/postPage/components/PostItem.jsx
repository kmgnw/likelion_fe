import React from "react";
import "../post.scss";

const PostItem = ({ post, onClick }) => {

  const handleClick = () => {
    localStorage.setItem("postId", post.id);
    onClick();
  };

  return (
    <div className="PostItem">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>Q. {post.title}</h4>
        <p className="PostText">{post.created_at}</p>
      </div>

      <div className="PostContent-Container">
        <p className="PostContent">{post.content}</p>
        <button className="PostButon" onClick={handleClick}>
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default PostItem;
