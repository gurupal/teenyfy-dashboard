import { Navigate } from "react-router-dom";
import Layout from "../../layout";
const Home = ({ user, logout }) => {
  if (!user) {
    <Navigate to="/" replace />;
  }
  return (
    <Layout logout={logout}>
      <p>This is Home Page.</p>;
    </Layout>
  );
};

export default Home;
