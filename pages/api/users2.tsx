import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { hash } from 'bcryptjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { createName, createPassword } = req.body
  console.log('name + password', createName + ' ' + createPassword)

  const hashChangePassword: any = await hash(createPassword, 10)

  console.log('testsestest', hashChangePassword)

  const result = await prisma.users.create({
    data: {
      name: createName,
      password: hashChangePassword,
    },
  })

  console.log('result', result)
  // res.json(result)
}
