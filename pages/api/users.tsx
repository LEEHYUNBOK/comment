import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password } = req.body
  console.log('aaaname + password', name + ' ' + password)

  const result = await prisma.users.create({
    data: {
      name: name,
      password: password,
    },
  })

  console.log('result', result)
  res.json(result)
}
