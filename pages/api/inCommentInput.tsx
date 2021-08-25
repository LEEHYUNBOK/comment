import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, content, id, password } = req.body
  const users = await prisma.users.findMany({
    where: {
      name,
      password,
    },
  })
  console.log('users', users)

  if (users.length !== 0) {
    const result = await prisma.inComments.create({
      data: {
        content: content,
        Users: { connect: { name: name } },
        Comments: { connect: { id: id } },
      },
    })

    const users = await prisma.inComments.findMany({
      where: { commentsId: id },
      include: { Users: true },
    })
    res.json(users)
  } else {
    res.status(200).json('사용자가 아닙니다.')
  }
}
