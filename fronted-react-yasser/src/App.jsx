import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/welcome" />}
        />
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/welcome" />}
        />
        <Route
          path="/welcome"
          element={token ? <Welcome /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
