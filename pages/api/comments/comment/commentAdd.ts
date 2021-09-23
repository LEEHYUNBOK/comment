import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'
import { compare } from 'bcryptjs'

export default async function CommentAdd(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { addName, addContent, postId, addPassword, userIp } = req.body

  const user = await prisma.commentUsers.findUnique({
    where: {
      name: addName,
    },
  })
  console.log('icanican', req.body)

  console.log('users', user)

  if (user !== null && addContent.replace(/(<([^>]+)>)/gi, '') !== '') {
    if ((await compare(addPassword, user.password)) === true) {
      const commentCreate = await prisma.comments.create({
        data: {
          content: addContent,
          userIP: userIp,
          commentUsers: { connect: { name: addName } },
          posts: { connect: { id: postId } },
        },
      })

      res.json(commentCreate)
    } else {
      res.status(200).json('비밀번호가 다릅니다.')
    }
  } else {
    if (addName === '') {
      res.status(200).json('사용자 입력하세요')
    } else if (addPassword === '') {
      res.status(200).json('비밀번호 입력하세요')
    } else if (addContent.replace(/(<([^>]+)>)/gi, '') === '') {
      res.status(200).json('내용을 입력하세요')
    } else {
      res.status(200).json('사용자가 아닙니다.')
    }
  }
}
