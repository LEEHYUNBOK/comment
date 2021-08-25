import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password, id, commentId } = req.body

  console.log('name + password', name + ' ' + password + ' ' + id)
  const com = await prisma.inComments.findMany({
    where: {
      id: id,
      Users: {
        name: name,
        password: password,
      },
    },
  })
  // console.log('comcom', com[0].commentsId)

  if (com.length !== 0) {
    const result = await prisma.inComments.delete({
      where: {
        id: id,
      },
    })

    const users = await prisma.inComments.findMany({
      where: { commentsId: commentId },
      include: { Users: true },
    })
    res.json(users)
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
