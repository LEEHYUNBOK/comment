import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'
import { compare } from 'bcryptjs'

export default async function InnerCommentDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log('body,', req.body)

  const { name, password, id, commentId } = req.body

  // console.log('name + password', name + ' ' + password + ' ' + id)
  const deleteComment = await prisma.commentsInner.findMany({
    where: {
      id: id,
      commentUsers: {
        name: name,
      },
    },
    include: { commentUsers: true },
  })

  // console.log('comcom', com[0].commentsId)

  if (deleteComment.length !== 0) {
    if (
      (await compare(password, deleteComment[0].commentUsers.password)) === true
    ) {
      const result = await prisma.commentsInner.delete({
        where: {
          id: id,
        },
      })
      res.json(result)
    } else {
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    res.status(202).json('사용자가 아닙니다.')
  }
}
