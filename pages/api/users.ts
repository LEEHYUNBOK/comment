import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { hash } from 'bcryptjs'
export default async function UserCreate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { createNewName, createNewPassword } = req.body
  console.log('aaaname + password', createNewName + ' ' + createNewPassword)
  const hashPassword: any = await hash(createNewPassword, 10)
  console.log('hashPassword', hashPassword)

  const result = await prisma.commentUsers.create({
    data: {
      name: createNewName,
      password: hashPassword,
    },
  })

  console.log('result', result)
  res.status(200).json('어서오세요')
}
