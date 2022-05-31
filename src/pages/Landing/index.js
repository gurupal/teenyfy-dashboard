import React, { useState } from "react";
import Login from "../../components/Forms/Login";
import SignUp from "../../components/Forms/SignUp";
import "../../styles/global.css";

const Landing = ({ handleLogin, handleRegister }) => {
  const [loginOrSignUP, setLoginOrSignUp] = useState("login");

  if (loginOrSignUP === "login") {
    return (
      <Login handleLogin={handleLogin} setLoginOrSignUp={setLoginOrSignUp} />
    );
  } else if (loginOrSignUP === "sign up") {
    return (
      <SignUp
        handleRegister={handleRegister}
        setLoginOrSignUp={setLoginOrSignUp}
      />
    );
  }
};

export default Landing;
