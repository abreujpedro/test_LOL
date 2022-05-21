import React from "react";
// import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/exampleState/exampleSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import styles from "./App.module.css";

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <div className={styles.positionAppDiv}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champs" element={<Login />} />
          <Route path="favoritesChamps" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
