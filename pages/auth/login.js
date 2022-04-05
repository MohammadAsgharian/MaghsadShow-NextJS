import React, { Fragment } from "react";
import _SharedLayout from "../../containers/_SharedLayout";
import Login from "../../containers/Login";

import { providers, signIn, getSession, csrfToken } from "next-auth";

function login({ providers, csrfToken }) {
  return (
    <_SharedLayout title="ورود">
      <Login></Login>
    </_SharedLayout>
  );
}
login.getInitial;

export default login;
