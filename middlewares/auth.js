import { getSession } from "next-auth/client";
import catchAsyncError from "./catchAsyncError";

const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });

  req.user = session.user;
  next();
});
