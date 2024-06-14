import basicAuth from "basic-auth";
import { NextApiRequest, NextApiResponse } from "next";

export function authenticate(
  req: NextApiRequest,
  res: NextApiResponse
): boolean {
  const user = basicAuth(req);
  if (!user || user.name !== "admin" || user.pass !== "password") {
    res.setHeader("WWW-Authenticate", 'Basic realm="example"');
    res.status(401).send("Authentication required.");
    return false;
  }
  return true;
}
