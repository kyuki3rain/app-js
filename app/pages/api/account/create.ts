import { NextApiRequest } from 'next'
import withDatabase, { Database } from '../../../middleware/database'
import { Account } from '../../../type'

const create = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Account>('accounts')
  const account = collection
    .findOne({
      name: req.body.account.name,
    })
    .then((result) => {
      res.json(result)
    })
    .catch(async () => {
      const insert = await collection.insertOne(req.body.account, {
        forceServerObjectId: false,
      })

      res.json(insert.ops[0])
    })
}

export default withDatabase(create)
