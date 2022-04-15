import { getSession } from "next-auth/react";
import catchAsyncError from "./catchAsyncError";

const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      session,
    });
  } else {
    res.send({
      error: null,
    });
  }
});

export { isAuthenticatedUser };
