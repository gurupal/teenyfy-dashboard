import React, { useState } from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Analytics from "./pages/Analytics";
// import Admin from "./pages/Admin";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layout";
import { useNavigate } from "react-router-dom";
import webrication from "./API/Webrication";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    //Test email: outlettest@gmail.com
    //Test password: 123456
    if (!email && !password) {
      return;
    }
    try {
      const res = await webrication.post(
        "/api/login",
        { email, password },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (!res.data.data.error) {
        setUser(true);
        navigate("home");
      } else {
        alert(res.data.data.message);
      }
    } catch (err) {
      console.log(err.response.data.error);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const res = await webrication.post("/api/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.data.message === "success") {
        alert("Account created successfully. Please Login.");
        window.location.reload();
      }
    } catch (error) {
      const err = error.response.data.error;
      if (err) {
        alert(err[Object.keys(err)[0]]);
      } else if (error.response.data.message.includes("Duplicate entry")) {
        alert("Duplicate entry");
      } else {
        alert("Something went wrong.");
      }
    }
  };

  // for analytics and admin scenario
  // const handleAdvancedLogin = (email, password) => {
  // if (email === "user@user.com" && password === "12345") {
  //   setUser({
  //     id: "user1",
  //     name: "Areeb",
  //     permissions: [""],
  //     roles: [""],
  //   });
  //   navigate("home");
  // } else if (email === "analyze@analyze.com" && password === "12345") {
  //   setUser({
  //     id: "analyze1",
  //     name: "Sami",
  //     permissions: ["analyze"],
  //     roles: [""],
  //   });
  //   navigate("analytics");
  // } else if (email === "admin@admin.com" && password === "12345") {
  //   setUser({
  //     id: "admin1",
  //     name: "Deepak",
  //     permissions: ["analyze"],
  //     roles: ["admin"],
  //   });
  //   navigate("admin");
  // }
  // };

  const handleLogout = () => setUser(null);

  return (
    <div>
      <Routes>
        {!user && (
          <Route
            path="/"
            element={
              <Landing
                user={!!user}
                handleLogin={handleLogin}
                handleRegister={handleRegister}
              />
            }
          />
        )}

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="home" element={<Home logout={handleLogout} />} />
          <Route
            path="dashboard"
            element={<Dashboard logout={handleLogout} />}
          />
        </Route>
        {/* <Route
          path="analytics"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.permissions.includes("analyze")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
};

export default App;
