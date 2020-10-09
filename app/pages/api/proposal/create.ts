import { NextApiRequest } from "next";
import withDatabase, { Database } from "../../../middleware/database";
import { Proposal } from "../../../type";
import * as MongoDB from "mongodb";

const create = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Proposal>("proposals");
  if (req.body.proposal._id != null) {
    const id = new MongoDB.ObjectID(req.body.proposal._id);
    await collection.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title: req.body.proposal.title,
          body: req.body.proposal.body,
        },
      }
    );

    return;
  }

  const insert = await collection.insertOne(req.body.proposal);

  res.json(insert.ops[0]);
};

export default withDatabase(create);
