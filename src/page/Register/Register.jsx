import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleStarted = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinished = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="login-img"
            className="logo"
          />
          <button className="login-btn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
        </h1>
        <h2>Giá từ 70.000 ₫. Hủy bất kỳ lúc nào.</h2>
        <p>
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
          thành viên của bạn.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="register-btn" onClick={handleStarted}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="ur password"
              ref={passwordRef}
            />
            <button className="register-btn" onClick={handleFinished}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
