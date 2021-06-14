import React from "react";
import { Route } from "react-router-dom";
import Main from "./pages/Main";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Mypage from "./pages/Mypage";
import StudySearch from "./pages/StudySearch";
import UserInfo from "./pages/UserInfo";
import Grouppage from "./pages/Grouppage";

const App = () => {
  return (
    <>
      <Route component={Main} path="/" exact />
      <Route component={Mypage} path="/mypage" />
      <Route component={SignInPage} path="/login" />
      <Route component={SignUpPage} path="/signup" />
      <Route component={StudySearch} path="/search" />
      <Route component={UserInfo} path="/info" />
      <Route component={Grouppage} path="/list" />
    </>
  );
};

export default App;

// import MyPage from "./pages/Mypage";
// import "./pages/Mypage.css";
// import React from "react";
// //import UserInfoPage from "./pages/UserInfoPage";
// //import UserInfo from "./pages/UserInfo";
// //import "./pages/UserInfo.css";

// function App() {
//   return (
//     <>
//       {/* <UserInfoPage></UserInfoPage> */}
//       <MyPage></MyPage>
//     </>
//   );
//   //return <UserInfo></UserInfo>;
// }

// export default App;
