import React, { useState, useRef } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import ButtonLoader from "../components/ButtonLoader";
import Button from "@mui/material/Button";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const loginDto = {
      Email: email,
      Password: password,
    };
    try {
      setLoading(true);
      const CONTAINER_URL = `${process.env.API_URL}/account/login`;
      const response = await axios.post(
        `${process.env.API_URL}/account/login`,
        loginDto
      );
      setLoading(false);
      const roles = response?.data?.roles;
      const userName = response?.data?.username;
      const token = response?.data?.token;
      setEmail("");
      setPassword("");
    } catch (err) {
      if (err.response?.status === 400) {
        toast.error("Missing UserName or Password");
      } else if (err.response?.status === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Login Failed");
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="Email">ایمیل</label>
      <input
        type="text"
        id="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="Password">رمزعبور</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <ButtonLoader
        variant="contained"
        type="submit"
        title="ورود"
        loading={loading}
      ></ButtonLoader>

      <Link href="/register">
        <Button variant="contained" color="success">
          ثبت نام
        </Button>
      </Link>
    </form>
  );
};

export default SignInForm;
