import { Button } from "@mui/material";
import _SharedLayout from "../../containers/_SharedLayout";
import Login from "../../containers/Login";

export default function login() {
  return (
    <_SharedLayout title="ورود">
      <Login></Login>
    </_SharedLayout>
  );
}
