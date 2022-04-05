import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonLoader from "../../components/ButtonLoader";

import { useRouter } from "next/router";
import { registerUser, clearError } from "../../redux/actions/userActions";
import { useDispatch, userDispacher, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    Password: "",
    Email: "",
  });
  const { Password, Email } = user;
  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, success, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      Password,
      Email,
    };
    dispatch(registerUser(userData));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
        onChange={onChange}
      />
      <ButtonLoader
        variant="contained"
        type="submit"
        title="ثبت نام"
        loading={loading}
      ></ButtonLoader>
    </form>
  );
};

export default Register;
