import nc from "next-connect";

import { isAuthenticatedUser } from "../../middlewares/auth";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
}).post(isAuthenticatedUser);

export default handler;
