import { FormEvent, useState } from "react";
import styles from "./LoginForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function LoginForm() {
  const { loginForm, submitBtn } = styles;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (event: FormEvent) => {
      event.preventDefault();
      return fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) return res;
        throw new Error(res.statusText);
      });
    },
    onSuccess: (data, variables, context) => {
      router.push("/account");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {mutation.isError ? <div>You entered incorrect credentials</div> : null}

      <form onSubmit={mutation.mutate} className={loginForm}>
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
    </>
  );
}
