import "./Login.css";
import "../../styles/common.css";

const Login = () => {
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
          <button id="loginBtn">로그인</button>
        </div>
        <div>
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
};

export default Login;
