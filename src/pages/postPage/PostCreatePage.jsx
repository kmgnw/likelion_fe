import React, { useState } from "react";
import "./post.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostCreatePage = ({ setPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("네편 답변");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try{

      const data = {
        user_id: 1,
        worksheet_id: 1,
        title:title,
        content: content,
        type: 1
      }

      const response = await axios.post("http://43.202.217.156:8080/api/posting", data);

      console.log(response);




    }catch (error){

    }
  }


  return (
    <div className="PostCreate">
      <div className="PostCreateContainer">
        <div>
          <p>게시글 제목</p>
          <input
            type="text"
            placeholder="질문 제목을 입력해 주세요"
            className="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <p>게시판 선택</p>
        <div className="radioGroup">
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 답변"
              checked={postType === "네편 답변"}
              onChange={(e) => setPostType(e.target.value)}
            />
            네편 답변
          </label>
          <label>
            <input
              type="radio"
              name="postType"
              value="네편 정보"
              checked={postType === "네편 정보"}
              onChange={(e) => setPostType(e.target.value)}
            />
            네편 정보
          </label>
        </div>

        <div>
          <p>게시글 내용</p>
          <textarea
            placeholder="질문 내용을 입력해 주세요"
            className="postTextarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <p>내 결과지 가져오기(선택)</p>
          <div className="imageBox">+</div>
        </div>
      </div>

      <button
      className="postCreateBtn"
      onClick={handleSubmit}
      >
        등록하기
      </button>
    </div>
  );
};

export default PostCreatePage;