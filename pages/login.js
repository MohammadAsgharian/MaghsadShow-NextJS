import { SignpostOutlined } from "@mui/icons-material";
import React, { Fragment } from "react";
import _SharedLayout from "../containers/_SharedLayout";
import SignIn from "../containers/SignIn";

function login() {
  return (
    <_SharedLayout title="صفحه ورود">
      <SignIn></SignIn>
    </_SharedLayout>
  );
}

export default login;
