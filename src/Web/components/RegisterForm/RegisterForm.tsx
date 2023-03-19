import { useState } from "react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const { form, submitBtn } = styles;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register api");
  };

  return (
    <form onSubmit={handleRegister} className={form}>
      <input
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleInputChange}
        type="text"
        name="firstName"
      />
      <input
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleInputChange}
        type="text"
        name="lastName"
      />
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
        Create Account
      </button>
    </form>
  );
}
