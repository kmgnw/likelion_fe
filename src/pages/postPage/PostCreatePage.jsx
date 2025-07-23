import React, { useState } from "react";
import "./post.scss";
import { useNavigate } from "react-router-dom";

const PostCreatePage = ({ setPosts }) => {
  const [content, setContent] = useState("네편 답변");

  const navigation = useNavigate();
  const goPostPageHandler = () => {
    navigation(`/post`);
  };

  return (
    <div className="PostCreate">
      <div className="PostCreateContainer">
        <div>
          <p>게시글 제목</p>
          <input
            type="text"
            placeholder="질문 제목을 입력해 주세요"
            className="titleInput"
          />
        </div>

        <p>게시판 선택</p>
        <div className="radioGroup">
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 답변"
              checked={content === "네편 답변"}
              onChange={(e) => setContent(e.target.value)}
            />
            네편 답변
          </label>
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 정보"
              checked={content === "네편 정보"}
              onChange={(e) => setContent(e.target.value)}
            />
            네편 정보
          </label>
        </div>

        <div>
          <p>게시글 내용</p>
          <textarea
            placeholder="질문 내용을 입력해 주세요"
            className="postTextarea"
          />
        </div>

        <div>
          <p>내 결과지 가져오기(선택)</p>
          <div className="imageBox">+</div>
        </div>
      </div>
      <button className="postCreateBtn" onClick={goPostPageHandler}>
        등록하기
      </button>
    </div>
  );
};

export default PostCreatePage;
