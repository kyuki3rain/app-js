import { NextApiRequest } from 'next'
import withDatabase, { Database } from '../../../middleware/database'
import { Account } from '../../../type'

const create = async (req: NextApiRequest & Database, res) => {
  const collection = await req.db.collection<Account>('accounts')
  const account = await collection.findOne({
    name: req.body.account.name,
  })

  if (account == null) {
    const insert = await collection.insertOne(req.body.account, {
      forceServerObjectId: false,
    })

    res.json(insert.ops[0])
    return
  }

  res.json(account)
}

export default withDatabase(create)
