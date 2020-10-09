import { NextApiRequest } from "next";
import withDatabase, { Database } from "../../../middleware/database";
import { Proposal } from "../../../type";

const list = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Proposal>("proposals");

  const proposals = await collection.find().toArray();

  res.json(proposals);
};

export default withDatabase(list);
