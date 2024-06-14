import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "./auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (authenticate(req, res)) {
    res.status(200).send("Secure OK");
  }
}
