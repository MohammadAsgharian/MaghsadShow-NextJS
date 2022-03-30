import { SignpostOutlined } from "@mui/icons-material";
import React, { Fragment } from "react";
import _SharedLayout from "../containers/_SharedLayout";
import SignInForm from "../containers/SignInForm";

function login() {
  return (
    <_SharedLayout title="ورود">
      <SignInForm></SignInForm>
    </_SharedLayout>
  );
}

export default login;
