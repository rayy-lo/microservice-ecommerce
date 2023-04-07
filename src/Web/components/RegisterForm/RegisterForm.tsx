import { FormEvent, useState } from "react";
import styles from "./RegisterForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const { form, submitBtn, errorMessage } = styles;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (event: FormEvent) => {
      event.preventDefault();
      return fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/register`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status === 201) return res;
        const data = await res.json();
        throw new Error(data.message);
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
      {mutation.isError ? (
        <p className={errorMessage}>{mutation.error.message}</p>
      ) : null}
      <form autoComplete="on" onSubmit={mutation.mutate} className={form}>
        <label htmlFor="firstName" className="visually-hidden">
          First Name
        </label>
        <input
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
          type="text"
          name="firstName"
          autoComplete="given-name"
        />
        <label htmlFor="lastName" className="visually-hidden">
          Last Name
        </label>
        <input
          value={formData.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
          type="text"
          name="lastName"
          autoComplete="family-name"
        />
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          value={formData.email}
          placeholder="E-mail address"
          onChange={handleInputChange}
          type="email"
          name="email"
          autoComplete="email"
        />
        <label htmlFor="password" className="visually-hidden">
          Password
        </label>
        <input
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="new-password"
        />
        <button className={submitBtn} type="submit">
          Create Account
        </button>
      </form>
    </>
  );
}
