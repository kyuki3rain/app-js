import * as MongoDB from 'mongodb'

const url = 'mongodb://root:example2@mongo'

const withDatabase = (handler) => {
  return async (req, res) => {
    const client = await MongoDB.MongoClient.connect(url, {
      useNewUrlParser: true,
    })
    req.db = client.db('test')
    return handler(req, res)
  }
}

export default withDatabase

export type Database = {
  db: MongoDB.Db
}
