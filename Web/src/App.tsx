import React from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./store/tokenState/tokenSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import styles from "./App.module.css";

const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("@lol:logged");
    dispatch(setToken(token));
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.positionAppDiv}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
