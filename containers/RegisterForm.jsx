import React, { useState, useRef } from "react";
import Link from "next/link";
import ButtonLoader from "../components/ButtonLoader";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { registerUser, clearError } from "../redux/actions/userActions";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    FirstName: "",
    LastNaem: "",
    UserName: "",
    Password: "",
    Email: "",
  });
  const { FirstName, LastNaem, UserName, Password, Email } = user;

  return <div>ثبت نام</div>;
};

export default RegisterForm;
