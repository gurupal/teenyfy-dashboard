import { Link } from "react-router-dom";
const Header = ({ logout }) => {
  return (
    <nav
      style={{
        display: "flex",
        width: "500px",
        justifyContent: "space-between",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      {/* <Link to="/analytics">Analytics</Link>
      <Link to="/admin">Admin</Link> */}
      <button onClick={() => logout()}>Sign Out</button>
    </nav>
  );
};

export default Header;
