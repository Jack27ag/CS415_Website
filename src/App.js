import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { RegisterForm } from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import LandingPage from "./Components/LandingPage";
import UserProfile from "./Components/UserProfile";
import UserView from "./Components/UserView";
import Module1 from "./Components/Module1";
import { Discuss } from "react-loader-spinner";

function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>
        <font color="white">There is no page at the requested url</font>
      </p>
    </div>
  );
}

function UnAuthorized() {
  return (
    <div style={{ padding: 20 }}>
      <h2>401: Unauthorized</h2>
      <p>
        <font color="white">
          You are not authorized to view the page at the requested url
        </font>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/login" style={{ padding: 5 }}>
          Login
        </Link>
        <Link to="/userprofile" style={{ padding: 5 }}>
          User Profile
        </Link>
        <Link to="/users" style={{ padding: 5 }}>
          Users
        </Link>
        <Link to="/modules/1" style={{ padding: 5 }}>
          Module 1
        </Link>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/users" element={<UserView />} />
          <Route path="/modules/1" element={<Module1 />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
