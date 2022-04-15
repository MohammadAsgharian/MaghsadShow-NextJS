import axios from "axios";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const user = new FormData(event.currentTarget);
    // console.log({
    //   Email: data.get("Email"),
    //   Password: data.get("Password"),
    // });
    const data = {
      Email: "m.asgharian@gmail.com",
      Password: "Mass@3541740.123",
    };
    // const CONTAINER_URL = `${process.env.API_URL}account/login/`;
    // const { data } = await axios({
    //   method: "post",
    //   url: CONTAINER_URL,
    //   data: user,
    // });

    const res = await signIn("credentials", {
      redirect: false,
      Email: data.Email,
      Password: data.Password,
    });
    console.log("result", res);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Email"
            label="ایمیل"
            name="Email"
            autoFocus
          />
          <TextField
            required
            fullWidth
            name="Password"
            label="رمزعبور"
            type="password"
            id="Password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                فراموشی رمز عبور
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"ثبت نام"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
