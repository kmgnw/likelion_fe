import React, { useState } from "react"; // useState 추가
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/signupPage/LoginPage";
import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";
import NotiPage from "./pages/notiPage/NotiPage";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import NotiDetailPage from "./pages/notiPage/NotiDetailPage";
import PostPage from "./pages/postPage/PostPage";
import PostDetailPage from "./pages/postPage/PostDetailPage";
import PostCreatePage from "./pages/postPage/PostCreatePage";

function App() {


  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "계약직도 연장여부 미리 말해줘야하나요?",
    //   user: "코카콜라",
    //   date: "2024.05.11",
    //   type: "네편 답변",
    //   content:
    //     "정규직일때는 해고하기 한달전에 말해줘야 한다는 법이 있다던데요. 계약직도 그런가요? 예를들어 1개월 계약직이 면 1개월만 계약할거고 더 연장의사 없다.라고 말해줘야 하는건가요? 아니면 그냥 계약기간 끝나면 끝나는거고 그런건가요?",
    // },
    // {
    //   id: 2,
    //   title: "계약서 쓴 날짜 보다 미리 와서 2시간 있다갔어요.",
    //   user: "코카",
    //   date: "2024.04.11",
    //   type: "네편 답변",
    //   content:
    //     "물류센터 아르바이트 하고 있는데  5월1일 근로자의날 이나 5월6일 대체 공휴일 같은 날은 주휴수당이 해당 되나요? 참고로 저날은 다 쉽니다 법정공휴일도 어떻게 되는지 궁금합니다.",
    // },
    // {
    //   id: 3,
    //   title: "공휴일 알바 대타해도 휴일근로수당 발생하나요?",
    //   user: "콜라",
    //   date: "2024.04.10",
    //   type: "네편 답변",
    //   content:
    //     "이번 15일 부처님 오신 날에 알바 대타 해주기로 했는데 이럴 경우 휴일근로수당이 발생할까요?",
    // },
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/noti" element={<NotiPage />} />
          <Route path="/noti/detail/:id" element={<NotiDetailPage />} />
          <Route
            path="/post"
            element={<PostPage posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/post/create"
            element={<PostCreatePage setPosts={setPosts} />}
          />
          <Route
            path="/post/detail/:id"
            element={<PostDetailPage posts={posts} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;