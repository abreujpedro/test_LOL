import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/tokenState/tokenSlice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import styles from "./App.module.css";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isLogged = Boolean(
    useSelector((state: RootState) => state.tokenReducer).value
  );
  React.useEffect(() => {
    const token = localStorage.getItem("@lol:logged");
    dispatch(setToken(token));
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.positionAppDiv}>
        <Routes>
          <Route
            path="/"
            element={isLogged ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!isLogged ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isLogged ? <RegisterPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<>404 Not Found</>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
