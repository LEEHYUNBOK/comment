import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { compare } from 'bcryptjs'

export default async function CommentAdd(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { addName, addContent, postId, addPassword } = req.body

  const user = await prisma.commentUsers.findUnique({
    where: {
      name: addName,
    },
  })
  console.log('icanican', req.body)

  console.log('users', user)

  if (user !== null) {
    if ((await compare(addPassword, user.password)) === true) {
      const commentCreate = await prisma.comments.create({
        data: {
          content: addContent,
          commentUsers: { connect: { name: addName } },
          posts: { connect: { id: postId } },
        },
      })

      const comments = await prisma.comments.findMany({
        where: { postId: postId },
        include: { commentUsers: true },
      })
      console.log('acadapamiitt', comments)

      res.json(comments)
    } else {
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    res.status(200).json('사용자가 아닙니다.')
  }
}
