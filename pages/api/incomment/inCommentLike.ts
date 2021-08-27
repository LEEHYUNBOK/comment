import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function InCommentLike(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { commentLikeId } = req.body

  const likeNum = await prisma.commentsIn.findUnique({
    where: {
      id: commentLikeId,
    },
  })

  const like = likeNum.like + 1

  const result = await prisma.commentsIn.update({
    where: { id: commentLikeId },
    data: { like: like },
  })
  const user_id = result.commentsId

  const users = await prisma.commentsIn.findMany({
    where: { commentsId: Number(user_id) },
    include: { commentUsers: true },
  })
  res.json(users)
}
