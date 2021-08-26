import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { compare } from 'bcryptjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password, id } = req.body

  console.log('name + password', name + ' ' + password + ' ' + id)
  const deleteComment = await prisma.comments.findMany({
    where: {
      id: id,
      Users: {
        name: name,
      },
    },
    include: { Users: true },
  })
  console.log('comcom', deleteComment.length)

  const inco = await prisma.inComments.findMany({
    where: {
      commentsId: id,
    },
  })

  if (deleteComment.length !== 0) {
    if ((await compare(password, deleteComment[0].Users.password)) === true) {
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
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
