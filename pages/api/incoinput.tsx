import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, content, id } = req.body
  const users = await prisma.users.findUnique({
    where: {
      name,
    },
  })
  console.log('users', users)

  if (users !== null) {
    const result = await prisma.inComments.create({
      data: {
        content: content,
        user: { connect: { name: name } },
        comment: { connect: { id: id } },
      },
    })

    const users = await prisma.inComments.findMany({
      where: { commentsId: id },
      include: { user: true },
    })
    res.json(users)
  } else {
    res.status(200).json('사용자가 아닙니다.')
  }
}
