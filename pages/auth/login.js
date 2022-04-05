import React, { Fragment } from "react";
import _SharedLayout from "../../containers/_SharedLayout";
import Login from "../../containers/Login";

const login = () => {
  return (
    <_SharedLayout title="ورود">
      <Login></Login>
    </_SharedLayout>
  );
};

export default login;
