import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonLoader from "../../components/ButtonLoader";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    Password: "",
    Email: "",
  });
  const { Password, Email } = user;
  const { success, error, loading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const loginDto = {
      Email: Email,
      Password: Password,
    };
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

export default Login;
