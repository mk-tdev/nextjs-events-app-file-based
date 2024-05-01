// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
  [key: string]: any;
};

const connectDB = async () => {
  const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const mongoClient = await MongoClient.connect(dbURL);

  return mongoClient;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { eventId } = req.query;
  let mongoClient;
  try {
    mongoClient = await connectDB();
  } catch (error) {
    res.status(500).json({ error: "Error connecting to the database" });
    return;
  }
  const db = mongoClient?.db();

  if (req.method === "GET") {
    try {
      // Fetch comments for the given eventId from the database or a comment service
      // const comments = await fetchCommentsForEvent(eventId);
      const result = await db
        ?.collection("comments")
        .find()
        .sort({ _id: -1 })
        .toArray();

      res.status(200).json({
        comments: result?.filter((c) => c.eventId === (eventId as string)),
      });
    } catch (e) {
      res.status(500).json({ error: "Error fetching comments" });
    }
  } else if (req.method === "POST") {
    try {
      // Process the new comment
      const { name, email, comment } = req.body;

      // Validate the input
      if (
        !name ||
        typeof name !== "string" ||
        !email ||
        typeof email !== "string" ||
        !comment ||
        typeof comment !== "string"
      ) {
        res.status(400).json({ error: "Invalid input" });
        return;
      }

      const newComment: any = {
        name,
        email,
        comment,
        eventId: eventId as string,
      };

      const result = await db.collection("comments").insertOne(newComment);
      newComment.id = result.insertedId;
      mongoClient.close();

      res
        .status(201)
        .json({ message: "Comment posted successfully", comment: newComment });
    } catch (e) {
      res.status(500).json({ error: "Error posting comment" });
    }
  }
}
