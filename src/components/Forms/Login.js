import { useState } from "react";

const Login = ({ handleLogin, setLoginOrSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div>
      <p>Login Page</p>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "43px" }}>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "20px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={(e) => onLoginClick(e)}>Login</button>
      </form>
      <p>Don't have an account?</p>
      <button onClick={() => setLoginOrSignUp("sign up")}>Sign Up</button>
    </div>
  );
};

export default Login;
