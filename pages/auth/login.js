import { Button } from "@mui/material";
import { getCsrfToken, signIn } from "next-auth/react";
import React from "react";

export default function SignIn({ csrfToken }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = signIn("credentials", {
      redirect: false,
      email: "sadasd",
      password: "asdasd",
    });
  };
  return (
    <form method="post" onSubmit={submitHandler}>
      <div>
        <input required name="username" type="text" />
      </div>
      <div>
        <input required name="password" type="password" />
      </div>
      <button type="submit">Sign into Economy.id</button>
    </form>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
