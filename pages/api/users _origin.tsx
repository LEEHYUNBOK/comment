import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password } = req.body
  console.log('name + password', name + ' ' + password)

  const bcrypt = require('bcrypt')
  const saltRounds = 10
  const temp1 = 's0//P4$$w0rD'
  let temp2 = 'not_bacon'
  let testResult: any

  const test = (e) => {
    bcrypt.hash(e, saltRounds, function (err, hash) {
      temp2 = hash
      console.log('lkkkkkkkkkkkkkkkkkktemp', temp2)
      console.log('lkkkkkkkkkkkkkkkkkkhash', hash)
      testResult = hash
      bcrypt.compare(temp1, hash, function (err, testResult) {
        console.log('my password', testResult)
        console.log('logloglog', testResult + ' ' + temp2)
        return hash
      })
    })
  }
  const resu = test(password)
  console.log('testsestest', resu)

  const result = await prisma.users.create({
    data: {
      name: name,
      password: password,
    },
  })

  console.log('result', result)
  res.json(result)
}
