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
    FirstName: "",
    LastName: "",
    UserName: "",
    Password: "",
    Email: "",
  });
  const { FirstName, LastNaem, UserName, Password, Email } = user;
  const { loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (success) {
  //     router.push("/login");
  //   }
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearError());
  //   }
  // }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefualt();
    const userData = {
      FirstName,
      LastName,
      UserName,
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
      <label htmlFor="FirstName_field">نام</label>
      <input
        type="text"
        id="FirstName_field"
        name="FirstName"
        value={FirstName}
        onChange={onChange}
      />
      <label htmlFor="LastName_field">نام خانوادگی</label>
      <input
        type="text"
        id="LastName_field"
        name="LastName"
        value={LastNaem}
        onChange={onChange}
      />
      <label htmlFor="UserName_field">نام کاربری</label>
      <input
        type="text"
        id="UserName_field"
        name="UserName"
        value={UserName}
        onChange={onChange}
      />
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonLoader
        variant="contained"
        type="submit"
        title="ثبت نام"
        loading={true}
      ></ButtonLoader>
    </form>
  );
};

export default Register;
