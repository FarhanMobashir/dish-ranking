import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/AuthForm.module.css";
import { TextField } from "./TextField";

export const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      console.log("login");
      login(user);
      navigate("/home/vote");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type={"text"}
          placeholder={"Username"}
        />

        <TextField
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          placeholder={"Password"}
        />
        <button className={styles.btn}>Login</button>
      </form>
    </div>
  );
};
