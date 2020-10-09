import { NextApiRequest } from "next";
import withDatabase, { Database } from "../../../../../middleware/database";
import { Deposit } from "../../../../../type";

const api = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Deposit>("deposits");
  const deposits = await collection.find().toArray();

  let amount = 0;
  deposits.forEach((deposit) => {
    amount += deposit.amount;
  });

  res.json({ amount });
};

export default withDatabase(api);
