import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const password = req.body
  const bcrypt = require('bcrypt')
  const saltRounds = 10
  const temp1 = 's0//P4$$w0rD'

  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log('lkkkkkkkkkkkkkkkkkkhash', hash)
    res.json(hash)
    // bcrypt.compare(temp1, hash, function (err, testResult) {
    //   console.log('my password', testResult)
    //   console.log('logloglog', testResult + ' ' + temp2)
    // })
  })
}
