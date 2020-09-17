import * as MongoDB from 'mongodb'

export type Account = {
  _id?: MongoDB.ObjectId
  name: string
}

export type Payment = {
  _id?: MongoDB.ObjectId
  accountId: MongoDB.ObjectId
  amount: number
  paidAt: number
}

export type Deposit = {
  _id?: MongoDB.ObjectId
  accountId: MongoDB.ObjectId
  amount: number
  paidAt: number
}
