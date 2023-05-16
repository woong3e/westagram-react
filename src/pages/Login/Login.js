import "./Login.scss";
import "../../styles/common.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>westagram-로그인</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <h1 className="logoText">westagram</h1>
        <div className="login">
          <input
            id="loginIdInput"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
          />
          <input id="loginPwInput" type="password" placeholder="비밀번호" />
          <button id="loginBtn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <div className="loginLink">
          <a href="">비밀번호를 잊으셨나요?</a>
          <Link to="/main">Main 으로 이동하는 Link component</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
