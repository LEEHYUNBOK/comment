import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { compare } from 'bcryptjs'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, password, id, commentId } = req.body

  console.log('name + password', name + ' ' + password + ' ' + id)
  const deleteComment = await prisma.inComments.findMany({
    where: {
      id: id,
      Users: {
        name: name,
      },
    },
    include: { Users: true },
  })

  // console.log('comcom', com[0].commentsId)

  if (deleteComment.length !== 0) {
    if ((await compare(password, deleteComment[0].Users.password)) === true) {
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
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
