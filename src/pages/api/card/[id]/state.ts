import { NextApiRequest, NextApiResponse } from "next";
import { authenticate } from "../../auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (authenticate(req, res)) {
    const { id } = req.query;
    res.status(200).json({ state: "active" });
  }
}
