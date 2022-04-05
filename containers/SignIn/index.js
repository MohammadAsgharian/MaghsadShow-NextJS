import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import ButtonLoader from "../../components/ButtonLoader";
import Button from "@mui/material/Button";
import fetchUrl from "../../Utils/fetchUrl";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    Password: "",
    Email: "",
  });
  const { Password, Email } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const loginDto = {
      Email: Email,
      Password: Password,
    };
    try {
      setLoading(true);
      const response = await fetchUrl("account/login", "POST", loginDto);
      console.log("response", response);
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
      <label htmlFor="Email_field">ایمیل</label>
      <input
        type="text"
        id="Email_field"
        name="Email"
        value={Email}
        onChange={onChange}
      />
      <label htmlFor="Password_field">رمزعبور</label>
      <input
        type="password"
        id="Password_field"
        name="Password"
        value={Password}
        onChange={onChange}
      />
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
