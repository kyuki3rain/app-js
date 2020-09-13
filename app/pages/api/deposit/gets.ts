import * as MongoDB from 'mongodb'
import { NextApiRequest } from 'next'
import withDatabase, { Database } from '../../../middleware/database'
import { Deposit } from '../../../type'

const gets = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Deposit>('deposits')
  const deposits = await collection.find().toArray()

  res.json(deposits)
}

export default withDatabase(gets)
