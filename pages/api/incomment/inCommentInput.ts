import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { compare } from 'bcryptjs'

export default async function InCommentInput(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { addName, addContent, id, addPassword } = req.body
  const user = await prisma.users.findUnique({
    where: {
      name: addName,
    },
  })

  // console.log('users', user)

  if (user !== null) {
    // 만약 user의 password와 입력 받은 password가 같다면
    if ((await compare(addPassword, user.password)) === true) {
      const commentCreate = await prisma.inComments.create({
        data: {
          content: addContent,
          Users: { connect: { name: addName } },
          Comments: { connect: { id: id } },
        },
      })

      const comments = await prisma.inComments.findMany({
        where: { commentsId: id },
        include: { Users: true },
      })
      res.json(comments)
    } else {
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    res.status(200).json('사용자가 아닙니다.')
  }
}
