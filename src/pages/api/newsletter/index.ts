// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

type Data = {
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      // Process the newsletter subscription request
      const { email } = req.body;

      // Validate the email
      if (!email || typeof email !== "string" || !email.includes("@")) {
        res.status(400).json({ error: "Invalid email address" });
        return;
      }
      // Save the email to the database or newsletter service
      const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
      const mongoClient = await MongoClient.connect(dbURL);
      const db = mongoClient.db();
      await db.collection("newsletters").insertOne({ email: email });
      mongoClient.close();

      res.status(201).json({ message: "Newsletter subscription successful" });
    } catch (e) {
      res
        .status(500)
        .json({ error: "Error processing newsletter subscription" });
    }
  }
}
