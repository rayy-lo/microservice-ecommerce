import { useState } from "react";
import styles from "./FooterEmail.module.css";

const FooterEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const { form, input, submitBtn, label, emailHeader } = styles;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting email:", email);
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <span className={emailHeader}>Join our email list</span>
      <label className={label} htmlFor="email">
        <input
          className={input}
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="email-error"
        />
        <span id="email-error" className="error" hidden>
          Please enter a valid email address.
        </span>
        <button className={submitBtn} type="submit">
          Submit
        </button>
      </label>
    </form>
  );
};

export default FooterEmail;
