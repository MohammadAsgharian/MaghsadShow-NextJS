import { SignpostOutlined } from "@mui/icons-material";
import React, { Fragment } from "react";
import _SharedLayout from "../containers/_SharedLayout";
import SignInForm from "../containers/SignIn";

function login() {
  return (
    <_SharedLayout title="ورود">
      <SignInForm></SignInForm>
    </_SharedLayout>
  );
}

export default login;
