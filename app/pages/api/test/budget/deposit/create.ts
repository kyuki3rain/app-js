import { NextApiRequest } from "next";
import withDatabase, { Database } from "../../../../../middleware/database";
import { Deposit } from "../../../../../type";

const create = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Deposit>("deposits");
  const insert = await collection.insertOne(req.body.deposit);

  res.json(insert.ops[0]);
};

export default withDatabase(create);
