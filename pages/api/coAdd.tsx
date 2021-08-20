import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, content, postId } = req.body
  console.log('body', req.body)

  const users = await prisma.users.findUnique({
    where: {
      name,
    },
  })
  console.log('users', users)

  if (users !== null) {
    const result = await prisma.comments.create({
      data: {
        content: content,
        user: { connect: { name: name } },
        post: { connect: { id: postId } },
      },
    })

    const users = await prisma.comments.findMany({
      where: { postId: postId },
      include: { user: true },
    })
    res.json(users)
  } else {
    res.status(200).json('사용자가 아닙니다.')
  }
}
