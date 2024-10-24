import React from "react";
import AuthCard from "../cards/authCard/AuthCard";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PostRequest } from "../../services/requests/PostRequest";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/tokenState/tokenSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();

  const loginCallback = React.useCallback(
    async (email: string, password: string) => {
      const token = await PostRequest.login(email, password);
      dispatch(setToken(token));
      localStorage.setItem("@lol:logged", token.token);

      navigate("/");
    },
    []
  );

  return (
    <AuthCard>
      <form>
        <label>
          <p className={styles.labelsText}>Email :</p>
          <input
            className={styles.inputs}
            placeholder="Email"
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <p className={styles.labelsText}>Password :</p>
          <input
            className={styles.inputs}
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </form>
      <Link to="/register">Register</Link>
      <button onClick={() => loginCallback(email, password)}>Logar</button>
    </AuthCard>
  );
};

export default Login;
