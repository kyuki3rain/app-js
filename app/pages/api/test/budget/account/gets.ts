import * as MongoDB from "mongodb";
import { NextApiRequest } from "next";
import withDatabase, { Database } from "../../../../../middleware/database";
import { Account } from "../../../../../type";

const gets = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Account>("accounts");
  const accounts = await collection.find().toArray();

  res.json(accounts);
};

export default withDatabase(gets);
