import { NextApiRequest, NextApiResponse } from "next";

// req = HTTP incoming message, res = HTTP server response
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}

// export default function handler(req, res) {
//   const email = req.body.email;
//   // Then save email to your database, etc...
// }
