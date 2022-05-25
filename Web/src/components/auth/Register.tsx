import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostRequest } from "../../services/requests/PostRequest";
import AuthCard from "../cards/authCard/AuthCard";
import styles from "./auth.module.css";

const Register: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();

  const registerCallback = React.useCallback(
    async ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) => {
      await PostRequest.register({ name, email, password });
      navigate("/login");
    },
    []
  );

  return (
    <AuthCard>
      <form>
        <label>
          <p className={styles.labelsText}>Name :</p>
          <input
            className={styles.inputs}
            placeholder="Name"
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </label>
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
      <Link to="/login">Login</Link>
      <button onClick={() => registerCallback({ name, email, password })}>
        Register
      </button>
    </AuthCard>
  );
};

export default Register;
