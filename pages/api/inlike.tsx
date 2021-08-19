import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body

  const likeNum = await prisma.inComments.findUnique({
    where: {
      id,
    },
  })

  const like = likeNum.like + 1

  const result = await prisma.inComments.update({
    where: { id: id },
    data: { like: like },
  })
  const user_id = result.commentsId

  const users = await prisma.inComments.findMany({
    where: { commentsId: Number(user_id) },
    include: { user: true },
  })
  res.json(users)
}
