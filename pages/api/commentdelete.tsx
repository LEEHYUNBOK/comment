import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password, id } = req.body

  console.log('name + password', name + ' ' + password + ' ' + id)
  const com = await prisma.comments.findMany({
    where: {
      id: id,
      Users: {
        name: name,
        password: password,
      },
    },
  })
  console.log('comcom', com.length)

  const inco = await prisma.inComments.findMany({
    where: {
      commentsId: id,
    },
  })

  if (com.length !== 0) {
    if (inco.length !== 0) {
      const result = await prisma.inComments.deleteMany({
        where: {
          commentsId: id,
        },
      })
    }
    const result = await prisma.comments.delete({
      where: {
        id: id,
      },
    })

    const users = await prisma.comments.findMany({
      where: { postId: 1 },
      include: { Users: true },
    })
    res.json(users)
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
