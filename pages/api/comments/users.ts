import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './lib/prisma'
import { hash } from 'bcryptjs'
export default async function UserCreate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { createNewName, createNewPassword } = req.body
  const hashPassword: any = await hash(createNewPassword, 10)

  const existUser = await prisma.commentUsers.findUnique({
    where: {
      name: createNewName,
    },
  })

  if (existUser === null) {
    const newUser = await prisma.commentUsers.create({
      data: {
        name: createNewName,
        password: hashPassword,
      },
    })
    res.status(200).json('어서오세요')
  } else {
    res.status(200).json('이미 존재하는 사용자 이름입니다.')
  }
}
