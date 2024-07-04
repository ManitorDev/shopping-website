"use client";
import styles from "@/styles/sendFeadbackForm/style.module.css";
import { FormEvent } from "react";

const SendFeedbackForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback sent!");
    // Send email to the server using a backend API here
  };

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <label
        className={`${styles.label} ${innerHeight > innerWidth ? "w-100" : ""}`}
        htmlFor=""
      >
        <input
          type="email"
          className={`${styles.input} w-100`}
          placeholder="Your Email"
        />
        <button className={`${styles.btn}`}>Send</button>
      </label>
    </form>
  );
};

export default SendFeedbackForm;
