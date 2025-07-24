import React, { useState, useEffect } from "react";
import axios from "axios";
import posts from "../../datas/posts.json";
import { useNavigate } from "react-router-dom";
import PostItem from "./components/PostItem";
import "./post.scss";
import SegmentedControl from "./components/SegmentControl";

const PostPage = ({ posts, setPosts }) => {

  const navigation = useNavigate();
  const goDetailHandler = () => {
    // navigation(`detail`);
  };
  const goCreateHandler = () => {
    navigation(`create`);
  };

  useEffect(()=>{

    const fetchPosts = async () => {
      try{
        const response = await axios.get("http://43.202.217.156:8080/api/posting/list/1")

        console.log(response.data.data)

        setPosts(response.data.data);


      } catch(error){
          console.log("에러");
      }
    }

    fetchPosts();

  }, [])

  const [selected, setSelected] = useState("네편 답변");

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
      >
        <SegmentedControl
          options={["네편 답변", "네편 정보"]}
          selected={selected}
          onChange={setSelected}
        />
      </div>

      <h1>인기게시글</h1>
      <div className="PostHeader">
        <h2>게시글</h2>
        <button onClick={goCreateHandler}>게시글 작성</button>
      </div>

      <div className="PostItem-Container">
        {posts.map((e, i) => (
          <PostItem
            key={i}
            post={e}
            onClick={() => goDetailHandler()}
          />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
