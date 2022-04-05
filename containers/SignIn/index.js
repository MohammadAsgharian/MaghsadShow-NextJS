import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import ButtonLoader from "../../components/ButtonLoader";
import Button from "@mui/material/Button";
import fetchUrl from "../../Utils/fetchUrl";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const SignInForm = () => {
  const dispatch = useDispatch();
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

    dispatch(loginUser(loginDto));
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
