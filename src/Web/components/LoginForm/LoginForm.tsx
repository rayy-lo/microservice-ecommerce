import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const { loginForm, submitBtn } = styles;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login api");
  };

  return (
    <form onSubmit={handleLogin} className={loginForm}>
      <input
        value={formData.email}
        placeholder="E-mail address"
        onChange={handleInputChange}
        type="email"
        name="email"
      />
      <input
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        type="password"
        name="password"
      />
      <button className={submitBtn} type="submit">
        Sign In
      </button>
    </form>
  );
}
