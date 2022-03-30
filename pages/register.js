import { SignpostOutlined } from "@mui/icons-material";
import React, { Fragment } from "react";
import _SharedLayout from "../containers/_SharedLayout";
import RegisterForm from "../containers/RegisterForm";

function register() {
  return (
    <_SharedLayout title="ثبت نام">
      <RegisterForm></RegisterForm>
    </_SharedLayout>
  );
}

export default register;
