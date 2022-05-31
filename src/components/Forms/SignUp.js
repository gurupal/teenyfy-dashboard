import { useState } from "react";

const SignUp = ({ handleRegister, setLoginOrSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const onSignUpClick = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      cofirm_password: confirmPassword,
      phone,
    };
    handleRegister(formData);
  };
  return (
    <div className="sign-up">
      <p>SignUp Page</p>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "43px" }}>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
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
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "20px" }}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "20px" }}>Phone Number</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button onClick={(e) => onSignUpClick(e)}>Sign Up</button>
      </form>
      <p>Already have an account?</p>
      <button onClick={() => setLoginOrSignUp("login")}>Login</button>
    </div>
  );
};

export default SignUp;
