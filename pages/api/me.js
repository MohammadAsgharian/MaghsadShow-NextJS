import nc from "next-connect";

import { isAuthenticatedUser } from "../../middlewares/auth";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(400).end("Something broke!");
  },
}).get(isAuthenticatedUser);

export default handler;
